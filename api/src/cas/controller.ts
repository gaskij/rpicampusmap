/* eslint-disable no-console */

/** Node Imports */
import { Request, Response } from 'express';
import CASAuthentication from 'express-cas-authentication';

/** Type Imports */
import { CRUDController } from '../types/interfaces';

// Override the default CASAuthentication Logout function.
/* eslint-disable @typescript-eslint/no-explicit-any */
CASAuthentication.prototype.logout = function logoutOverride(req: any, res: Response): void {
  // Destroy the entire session if the option is set.
  if (this.destroy_session) {
    req.session.destroy((err: any) => {
      if (err) {
        /* eslint-disable-next-line no-console */
        console.log(err);
      }
    });
  } else { // Otherwise, just destroy the CAS session variables.
    delete req.session[this.session_name];
    if (this.session_info) {
      delete req.session[this.session_info];
    }
  }
  // Redirect the client back to the page the request was sent from. **OVERRIDE**
  res.redirect('back');
};
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Instantiate CASAuthentication */
const cas = new CASAuthentication({
  /* eslint-disable @typescript-eslint/camelcase */
  cas_url: 'https://cas-auth.rpi.edu/cas',
  service_url: process.env.NODE_ENV === 'production' ? 'https://rpicampusmap.herokuapp.com' : 'http://localhost:3000',
  session_name: 'casUser',
  /* eslint-enable @typescript-eslint/camelcase */
});

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readCasAPI = (req: Request, res: Response): void => {
  try {
    if (req.session) {
      if (req.session.casUser) {
        res.json(req.session);
      } else {
        res.json({ casUser: 'Not authenticated', admin: false });
      }
    }
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
};

const readCasUser = (req: Request, res: Response): void => {
  try {
    if (req.session) {
      if (req.session.casUser) {
        res.json({ casUser: req.session.casUser, admin: false });
      } else {
        res.json({ casUser: 'Not authenticated', admin: false });
      }
    }
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
};

const readCasLogout = (req: Request, res: Response): void => {
  try {
    res.json({ casUser: 'Not authenticated', admin: false });
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
  
};

export const CasAPIController: CRUDController = {
  create: unsupported,
  read: readCasAPI,
  update: unsupported,
  delete: unsupported,
};

export const CasUserController: CRUDController = {
  create: unsupported,
  read: readCasUser,
  update: unsupported,
  delete: unsupported,
};

export const CasAuthController: CRUDController = {
  create: unsupported,
  read: unsupported,
  update: unsupported,
  delete: unsupported,
};

export const CasLogoutController: CRUDController = {
  create: unsupported,
  read: readCasLogout,
  update: unsupported,
  delete: unsupported,
};

export default cas;