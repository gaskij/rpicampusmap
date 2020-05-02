/* eslint-disable no-console */

/** Node Imports */
import { Request, Response } from 'express';
import Mongoose, { MongooseDocument } from 'mongoose';

/** Custom Imports */
import {
  dbOptions as options,
  dbURI as uri,
} from '../config/dbConfig';

/** Mongoose Schemas */
import Location from '../models/Location';

import { CRUDController } from '../types/interfaces';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

/** Actions to take on all Locations */
const readIndex = (req: Request, res: Response): void => {
  console.log('GET: /api/locations');
  // Use Mongoose to get all location in the database
  Mongoose.connect(uri, options).then(() => {
    Location.find({}, { properties: 1, geometry: 1 })
      .then((locations: MongooseDocument[]) => {
        Mongoose.disconnect();
        res.json(locations);
      });
  }).catch((err) => { // if there is an error retrieving, send the error.
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const createIndex = (req: Request, res: Response): void => {
  // get the location data to create
  console.log('POST: /api/locations');
  console.log(req.body);

  Mongoose.connect(uri, options).then(() => {
    Location.create(req.body.location)
      .then((result) => {
        console.log('\tSuccessfully added location to database.\n');
        Mongoose.disconnect();
        res.json(result);
      });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

/** Actions to take on a single location specified by id */
const readLocation = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`GET: /api/locations/${id}`);

  Mongoose.connect(uri, options).then(() => {
    Location.findOne({ id }).then((result) => {
      console.log('Found', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const updateLocation = (req: Request, res: Response): void => {
  const id = req.params.id;
  const body = req.body;
  console.log(`PUT: /api/locations/${id}`);

  Mongoose.connect(uri, options).then(() => {
    Location.findOneAndUpdate({ id }, body).then((result) => {
      console.log('Successfully updated.', result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
  });
};

const deleteLocation = (req: Request, res: Response): void => {
  const id = req.params.id;
  console.log(`GET: /api/locations/${id}`);
  /** Code to actually do it
  Mongoose.connect(uri, options).then(() => {
    Location.deleteOne({ id }).then((result) => {
      console.log(`Successfully deleted id=${id}`, result);
      Mongoose.disconnect();
      res.json(result);
    });
  }).catch((err) => {
    console.error('ERROR:', err);
    Mongoose.disconnect();
    res.send(err);
  });
  */
  res.send('Will be allowed once admins are set up.');
};

export const Index: CRUDController = {
  create: createIndex,
  read: readIndex,
  update: unsupported,
  delete: unsupported,
};

export const LocationController: CRUDController = {
  create: unsupported,
  read: readLocation,
  update: updateLocation,
  delete: deleteLocation,
};
