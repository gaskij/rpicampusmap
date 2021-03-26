/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';

/** Custom Imports */
import {
  cas,
  CasAPIController,
  CasUserController,
  CasAuthController,
  CasLogoutController,
} from './controller';

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
