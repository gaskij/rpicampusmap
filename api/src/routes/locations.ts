/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';

/** Custom Imports */
import {
  Index,
  LocationController,
} from '../controllers/locations';

const jsonParser = bodyParser.json();
const router = express.Router();

/** Actions to take on all Locations */
router.route('/')
  .get((req, res) => Index.read(req, res))
  .post(jsonParser, (req, res) => Index.create(req, res))
  .put(jsonParser, (req, res) => Index.update(req, res))
  .delete((req, res) => Index.delete(req, res));

/** Actions to take on a single location specified by id */
router.route('/:id')
  .get((req, res) => LocationController.read(req, res))
  .post(jsonParser, (req, res) => LocationController.create(req, res))
  .put((req, res) => LocationController.update(req, res))
  .delete((req, res) => LocationController.delete(req, res));

export default router;
