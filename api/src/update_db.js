/* eslint-disable no-console */
import Mongoose from 'mongoose';
import dotenv from 'dotenv';
import locations from './geolocations.json';
import Location from './models/Location';

dotenv.config({ path: './.env' });

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = { useUnifiedTopology: true, useNewUrlParser: true };

Mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to database.');
    // Populate Database with locations if need be (ONLY FOR USERS WITH WRITE ACCESS).
    console.log('Attempting to add locations to database...');
    Location.collection.insertMany(locations, { ordered: false })
      .then((success) => console.log('Successfully added to database:\n', success))
      .catch((err) => console.error('ERROR:', err));
  })
  .catch((err) => console.error('ERROR:', err))
  .finally(() => Mongoose.disconnect());
