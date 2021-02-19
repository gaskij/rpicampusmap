/** ADMIN ROUTE */

/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';

import {
  Index,
  AdminRequest,
  Login,
} from './controller';

const jsonParser = bodyParser.json();
const router = express.Router();

router.route('/')
  .get((req, res) => Index.read(req, res))
  .post(jsonParser, (req, res) => Index.create(req, res))
  .put(jsonParser, (req, res) => Index.update(req, res))
  .delete((req, res) => Index.delete(req, res));

router.route('/request')
  .get((req, res) => AdminRequest.read(req, res))
  .post(jsonParser, (req, res) => AdminRequest.create(req, res))
  .put(jsonParser, (req, res) => AdminRequest.update(req, res))
  .delete((req, res) => AdminRequest.delete(req, res));

router.route('/api/login')
  .get((req, res) => Login.read(req, res))
  .post(jsonParser, (req, res) => Login.create(req, res))
  .put(jsonParser, (req, res) => Login.update(req, res))
  .delete((req, res) => Login.delete(req, res));

export default router;
