/* eslint-disable no-console */

/** Node Imports */
import Mongoose from 'mongoose';
import { Request, Response } from 'express';

/** Type Imports */
import { CRUDController } from '../types/interfaces';

/** Custom Imports */
import {
  dbOptions as options,
  DB_URI as uri,
} from '../config/dbConfig';

/** Mongoose Schemas */
import Comment from '../models/Comment';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readComments = (req: Request, res: Response): void => {
  const { location } = req.params;
  console.log(`GET: /api/comments/${location}`);

  /** Return all comments */
  Mongoose.connect(uri, options).then(() => {
    Comment.find({ location }).then((result) => {
      console.log('\tFound', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.status(500).send(`ERROR: ${err}`);
  });
};

const createComment = (req: Request, res: Response): void => {
  const { location } = req.params;
  console.log(`POST: /api/comments/${location}`);

  /** Add the new comment to the pending approval collection */
  Mongoose.connect(uri, options).then(() => {
    const newComment = new Comment(req.body);

    newComment.save().then((result) => {
      console.log('\tCreated', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.status(500).send(`ERROR: ${err}`);
  });
};

const readComment = (req: Request, res: Response): void => {
  const { location, id } = req.params;
  console.log(`GET: /api/comments/${location}/${id}`);

  /** Return comment matching id */
  Mongoose.connect(uri, options).then(() => {
    Comment.findOne({ location, _id: id }).then((result) => {
      console.log('\tFound', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.status(500).send(`ERROR: ${err}`);
  });
};

const updateComment = (req: Request, res: Response): void => {
  const { location, id } = req.params;
  console.log(`PUT: /api/comments/${location}/${id}`);

  /** Update the specified comment */
  Mongoose.connect(uri, options).then(() => {
    Comment.findByIdAndUpdate(id, req.body, { new: true })
      .then((result) => {
        console.log('\tUpdated', result);
        Mongoose.disconnect();
        res.json(result);
      });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.status(500).send(`ERROR: ${err}`);
  });
};

const deleteComment = (req: Request, res: Response): void => {
  const { location, id } = req.params;
  console.log(`DELETE: /api/comments/${location}/${id}`);

  /** Delete the specified comment */
  Mongoose.connect(uri, options).then(() => {
    Comment.findByIdAndRemove(id).then((result) => {
      console.log('\tRemoved', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });

  res.status(500).send('Not yet implemented.');
};

export const AllComments: CRUDController = {
  create: createComment,
  read: readComments,
  update: unsupported,
  delete: unsupported,
};

export const SingleComment: CRUDController = {
  create: unsupported,
  read: readComment,
  update: updateComment,
  delete: deleteComment,
};
