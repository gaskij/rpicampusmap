/** Node Imports */
import express from 'express';

/** Custom Imports */
import { Index } from '../controllers/search';

const router = express.Router();

router.route('/')
  .get((req, res) => Index.read(req, res))
  .post((req, res) => Index.create(req, res))
  .put((req, res) => Index.update(req, res))
  .delete((req, res) => Index.delete(req, res));

export default router;
