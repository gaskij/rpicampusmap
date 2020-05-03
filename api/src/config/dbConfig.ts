import path from 'path';

import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

export const dbURI = `mongodb+srv://${user}:${pass}@rpicampusmap-fwvzb.gcp.mongodb.net/test?retryWrites=true`;

export const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
