/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';

/** Custom Imports */
import {
  Index,
  Comments,
  Photos,
} from '../controllers/info';

const jsonParser = bodyParser.json();
const router = express.Router();

router.route('/:id')
  .get((req, res) => Index.read(req, res))
  .post(jsonParser, (req, res) => Index.create(req, res))
  .put(jsonParser, (req, res) => Index.update(req, res))
  .delete((req, res) => Index.delete(req, res));

router.route('/:id/comments')
  .get((req, res) => Comments.read(req, res))
  .post(jsonParser, (req, res) => Comments.create(req, res))
  .put(jsonParser, (req, res) => Comments.update(req, res))
  .delete((req, res) => Comments.delete(req, res));

router.route('/:id/photos')
  .get((req, res) => Photos.read(req, res))
  .post(jsonParser, (req, res) => Photos.create(req, res))
  .put(jsonParser, (req, res) => Photos.update(req, res))
  .delete((req, res) => Photos.delete(req, res));

export default router;
