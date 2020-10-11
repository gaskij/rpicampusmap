import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const USER = process.env.DB_USER;
const PASS = process.env.DB_PASS;

export const DB_URI = process.env.MONGODB_URI || `mongodb://${USER}:${PASS}@rpicampusmap-shard-00-00-fwvzb.gcp.mongodb.net:27017,rpicampusmap-shard-00-01-fwvzb.gcp.mongodb.net:27017,rpicampusmap-shard-00-02-fwvzb.gcp.mongodb.net:27017/rpicampusmap?ssl=true&replicaSet=rpicampusmap-shard-0&authSource=admin&retryWrites=true&w=majority`;

export const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
