/** Node Imports */
import express from 'express';
import bodyParser from 'body-parser';

/** Custom Imports */
import {
  AllComments,
  SingleComment,
} from '../controllers/comments';

const jsonParser = bodyParser.json();
const router = express.Router();

router.route('/:location')
  .get((req, res) => AllComments.read(req, res))
  .post(jsonParser, (req, res) => AllComments.create(req, res))
  .put(jsonParser, (req, res) => AllComments.update(req, res))
  .delete((req, res) => AllComments.delete(req, res));

router.route('/:location/:id')
  .get((req, res) => SingleComment.read(req, res))
  .post(jsonParser, (req, res) => SingleComment.create(req, res))
  .put(jsonParser, (req, res) => SingleComment.update(req, res))
  .delete((req, res) => SingleComment.delete(req, res));

export default router;
