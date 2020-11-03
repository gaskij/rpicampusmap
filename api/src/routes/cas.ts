/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';
import CASAuthentication from 'express-cas-authentication';

/** Custom Imports */
import {
  CasAPIController,
  CasUserController,
  CasAuthController,
  CasLogoutController,
} from '../controllers/cas';


/** Instantiate CASAuthentication */
const cas = new CASAuthentication({
  /* eslint-disable-next-line @typescript-eslint/camelcase */
  cas_url: 'https://cas-auth.rpi.edu/cas',
  /* eslint-disable-next-line @typescript-eslint/camelcase */
  // service_url: 'https://rpicampusmap.herokuapp.com',
  /* eslint-disable-next-line @typescript-eslint/camelcase */
  service_url: 'http://localhost:5000',
  /* eslint-disable-next-line @typescript-eslint/camelcase */
  session_name: 'casUser',
  // serverBaseURL: (process.env.NODE_ENV === "production"?'https://rpicampusmap.herokuapp.com':'http://localhost:5000')
});

const jsonParser = bodyParser.json();
const router = express.Router();


/** Access to API should be restricted */
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
// get request.session to get the user/session information

/** Redirect unauthenticated clients */
router.route('/authenticate')
  .get(cas.bounce_redirect) // bounce_redirect goes to whatever page the login page goes to
  .post(jsonParser, (req, res) => CasAuthController.create(req, res))
  .put((req, res) => CasAuthController.update(req, res))
  .delete((req, res) => CasAuthController.delete(req, res));


/** Redirect unauthenticated clients */
router.route('/logout')
  .get(cas.logout)
  .post(jsonParser, (req, res) => CasLogoutController.create(req, res))
  .put((req, res) => CasLogoutController.update(req, res))
  .delete((req, res) => CasLogoutController.delete(req, res));

export default router;
