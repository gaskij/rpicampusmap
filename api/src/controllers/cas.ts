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


/** UPDATESTUFF FROM HERE */
const readIndex = (req: Request, res: Response): void => {
console.log(`GET: /api/search${req.url}`);

/** Search for matching locations if query specified */
const searchQuery = (req.query.query)
    ? {
    $or: [
        { 'properties.name': { $regex: req.query.query, $options: 'i' } },
        { 'properties.nick': { $regex: req.query.query, $options: 'i' } },
        { 'properties.description': { $regex: req.query.query, $options: 'i' } },
        { 'properties.category': { $regex: req.query.query, $options: 'i' } },
        { 'properties.amenity': { $regex: req.query.query, $options: 'i' } },
    ],
    }
    : {};

Mongoose.connect(uri, options).then(() => {
    Location.find(searchQuery, { properties: 1 }).then((results) => {
    console.log(`\tFound ${results.length} locations.`);
    Mongoose.disconnect();
    res.json(results);
    });
}).catch((err) => {
    console.error('\tERROR:', err);
    Mongoose.disconnect();
    res.send(`ERROR: ${err}`);
});
};

export const Index: CRUDController = {
create: unsupported,
read: readIndex,
update: unsupported,
delete: unsupported,
};

export default Index;
