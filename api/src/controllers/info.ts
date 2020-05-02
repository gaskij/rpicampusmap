/* eslint-disable no-console */

/** Node Imports */
import Mongoose from 'mongoose';
import { Request, Response } from 'express';

/** Type Imports */
import { CRUDController } from '../types/interfaces';

/** Custom Imports */
import {
  dbOptions as options,
  dbURI as uri,
} from '../config/dbConfig';

/** Mongoose Schemas */
import Location from '../models/Location';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readIndex = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`GET: /api/info/${id}`);

  /** Return all information for matching location id */
  Mongoose.connect(uri, options).then(() => {
    Location.findOne({ id }).then((result) => {
      console.log('\tFound', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const readComments = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`GET: /api/info/${id}/comments`);

  /** Return all comments for matching location id */
  Mongoose.connect(uri, options).then(() => {
    Location.findOne({ id }, { comments: 1 }).then((result) => {
      console.log('\tFound', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const createComments = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`POST: /api/info/${id}/comments`);

  /** Add the new comment to the pending approval collection */

  res.send('Not yet implemented.');
};

const readPhotos = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`GET: /api/info/${id}/photos`);

  /** Return all photos for matching location id */
  Mongoose.connect(uri, options).then(() => {
    Location.findOne({ id }, { photos: 1 }).then((result) => {
      console.log('\tFound', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const createPhotos = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`POST: /api/info/${id}/photos`);

  /** Add the new photo to the pending approval collection */

  res.send('Not yet implemented.');
};

export const Index: CRUDController = {
  create: unsupported,
  read: readIndex,
  update: unsupported,
  delete: unsupported,
};

export const Comments: CRUDController = {
  create: createComments,
  read: readComments,
  update: unsupported,
  delete: unsupported,
};

export const Photos: CRUDController = {
  create: createPhotos,
  read: readPhotos,
  update: unsupported,
  delete: unsupported,
};

// /* =================================== COMMENT ====================================== */
//     const loc = req.body.loc;
//     const author = req.body.author;
//     const text = req.body.text;
//     const date = req.body.date;
//     console.log(req.body);
//     console.log('author:', author);
//     console.log('text:', text);
//     console.log('date:', date);
// /* ================================================================================== */
