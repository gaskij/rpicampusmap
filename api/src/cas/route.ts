/** Node Imports */
import express, { Response } from 'express';
import bodyParser from 'body-parser';
import CASAuthentication from 'express-cas-authentication';

/** Custom Imports */
import {
  CasAPIController,
  CasUserController,
  CasAuthController,
  CasLogoutController,
} from './controller';

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

const jsonParser = bodyParser.json();
const router = express.Router();

/** Default route to CAS login page */
router.route('/')
  .get(cas.bounce_redirect, (req, res) => CasAPIController.read(req, res))
  .post(jsonParser, (req, res) => CasAPIController.create(req, res))
  .put((req, res) => CasAPIController.update(req, res))
  .delete((req, res) => CasAPIController.delete(req, res));

/** Route to retrieve authenticated CAS username */
router.route('/user')
  .get((req, res) => CasUserController.read(req, res))
  .post(jsonParser, (req, res) => CasUserController.create(req, res))
  .put((req, res) => CasUserController.update(req, res))
  .delete((req, res) => CasUserController.delete(req, res));

/** Redirect unauthenticated clients */
router.route('/authenticate')
  .get(cas.bounce_redirect)
  .post(jsonParser, (req, res) => CasAuthController.create(req, res))
  .put((req, res) => CasAuthController.update(req, res))
  .delete((req, res) => CasAuthController.delete(req, res));

/** Redirect unauthenticated clients */
router.route('/logout')
  .get(cas.logout, (req, res) => CasLogoutController.read(req, res))
  .post(jsonParser, (req, res) => CasLogoutController.create(req, res))
  .put((req, res) => CasLogoutController.update(req, res))
  .delete((req, res) => CasLogoutController.delete(req, res));

export default router;
