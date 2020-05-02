/* eslint-disable no-console */

/** Node Imports */
import { Request, Response } from 'express';
import Mongoose from 'mongoose';

/** Custom Imports */
import {
  dbOptions as options,
  dbURI as uri,
} from '../config/dbConfig';

import { CRUDController } from '../types/interfaces';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readIndex = (req: Request, res: Response): void => {
  console.log('GET: /api/admin');
  res.send('Not yet implemented');
};

const createIndex = (req: Request, res: Response): void => {
  console.log('POST: /api/admin');
  res.send('Not yet implemented');
};

const createRequest = (req: Request, res: Response): void => {
  const username = req.body.rcsID;
  const password = req.body.password;

  console.log('Username:', username);
  console.log('Password:', password);

  Mongoose.connect(uri, options).then(() => {
    console.log('Database connected in route "/admin"!');
    Mongoose.disconnect();
    res.send('Not yet implemented');
  });
};

const createLogin = (req: Request, res: Response): void => {
  console.log('POST: /api/admin/login');
  res.send('Not yet implemented');
};

export const Index: CRUDController = {
  create: createIndex,
  read: readIndex,
  update: unsupported,
  delete: unsupported,
};

export const AdminRequest: CRUDController = {
  create: createRequest,
  read: unsupported,
  update: unsupported,
  delete: unsupported,
};

export const Login: CRUDController = {
  create: createLogin,
  read: unsupported,
  update: unsupported,
  delete: unsupported,
};
