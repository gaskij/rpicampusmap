/* eslint-disable no-console */

/** Node Imports */
import Mongoose from 'mongoose';
import { Request, Response } from 'express';

// import cas from '../routes/cas';

/** Type Imports */
import { CRUDController } from '../types/interfaces';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readCasAPI = (req: Request, res: Response): void => {
  // res.json({ success: true });
  if (req.session) {
    const u = req.session.cas_user;
    // eslint-disable-next-line no-template-curly-in-string
    res.send(`<html><body>Hello! "${u}" </body></html>`);
  }
};

const readCasUser = (req: Request, res: Response): void => {
  if (req.session) {
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    res.json({ cas_user: req.session.cas_user });
    // res.json({ cas_user: req.session[cas.session_name] });
    // check empty req.session.cas_user
    // for all controllers that require auth, write it with req.session.cas_user
    // use cas.block for all routes
    // have a button that goes to /api/cas
    // redirect back to the pages

    // res.send('<html><body>Hello again!</body></html>');
    // check the session at api/authorize when trying to get to access admin
    // endpoint should say yes or no about authorization and then proceed based on the information that is returned
  }
};

// bounce when trying to access campusmap.com/admin
// /login use bounce_redirect

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
  // read: cas.bounce_redirect,
  read: unsupported,
  update: unsupported,
  delete: unsupported,
};

export const CasLogoutController: CRUDController = {
  create: unsupported,
  // read: cas.logout,
  // read: unsupported,
  update: unsupported,
  delete: unsupported,
};
