/* eslint-disable no-console */

/** Node Imports */
import { Request, Response } from 'express';

/** Type Imports */
import { CRUDController } from '../types/interfaces';

const unsupported = (req: Request, res: Response): void => {
  res.send('This method is not supported.');
};

const readCasAPI = (req: Request, res: Response): void => {
  try {
    if (req.session) {
      if (req.session.casUser) {
        res.json(req.session);
      } else {
        res.json({ casUser: 'Not authenticated', admin: false });
      }
    }
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
};

const readCasUser = (req: Request, res: Response): void => {
  try {
    if (req.session) {
      if (req.session.casUser) {
        res.json({ casUser: req.session.casUser, admin: false });
      } else {
        res.json({ casUser: 'Not authenticated', admin: false });
      }
    }
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
};

const readCasLogout = (req: Request, res: Response): void => {
  try {
    res.json({ casUser: 'Not authenticated', admin: false });
  } catch (err) {
    res.status(500).send(`ERROR: ${err}`);
  }
};

export const CasAPIController: CRUDController = {
  create: unsupported,
  read: readCasAPI,
  update: unsupported,
  delete: unsupported,
};

export const CasUserController: CRUDController = {
  create: unsupported,
  read: readCasUser,
  update: unsupported,
  delete: unsupported,
};

export const CasAuthController: CRUDController = {
  create: unsupported,
  read: unsupported,
  update: unsupported,
  delete: unsupported,
};

export const CasLogoutController: CRUDController = {
  create: unsupported,
  read: readCasLogout,
  update: unsupported,
  delete: unsupported,
};
