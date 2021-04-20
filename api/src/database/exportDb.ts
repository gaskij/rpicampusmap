/* eslint-disable no-console */
import Location from '../models/Location';

import Mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config({ path: '../../../.env' });

const user = 'gaskij';
const pass = 'xSZLj2LHe2IeKQK0';

console.log(user, pass)
const uri = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;
const options = { useUnifiedTopology: true, useNewUrlParser: true };

Mongoose.connect(uri, options)
  .then(() => {
    console.log('Connected to database.');
    // Populate Database with locations if need be (ONLY FOR USERS WITH WRITE ACCESS).
    console.log('Attempting to add locations to database...');
    Location.find()
      .then((locations) => {
        // Mongoose.disconnect();
        // try {
          console.log(locations)
          // convert JSON object to a string
          const data = JSON.stringify(locations, null, 4);
          // write file to disk
          fs.writeFileSync('./geolocations.json', data, 'utf8');
          console.log(`File is written successfully!`);
        // } catch (err) {
        //     console.log(`Error writing file: ${err}`);
        // }
      })
      .catch((err) => console.error('ERROR1:', err));
  })
  .catch((err) => console.error('ERRO2R:', err))
  .finally(() => Mongoose.disconnect());
