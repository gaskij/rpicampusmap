/* eslint-disable no-console */

/** Node Imports */
import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

/** API Routes */
import locationsRoutes from './routes/locations';
import searchRoutes from './routes/search';
import infoRoutes from './routes/info';

/** General Configuration */
dotenv.config({ path: '../../.env' });
const port = 5000;

/** Instantiate Express Server */
const server = express();
server
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, '../../campusmap/src/')))
  .use(cors())
  .listen(port);
console.log(`Listening on port ${port}`);


/** ================================== API ROUTES ===================================== */
/** Locations */
server.use('/api/locations', locationsRoutes);

/** Search */
server.use('/api/search', searchRoutes);

/** Info */
server.use('/api/info', infoRoutes);

/** Comment */

/** Users */

/** Photos */

/** Login */

/** Register */


/* =============================== FRONT END ROUTE =================================== */
server.get('/', ((req, res) => {
  res.sendFile(path.join(__dirname, '../../campusmap/src/index.html'));
}));

server.get('/*', ((req, res) => {
  res.sendFile(path.join(__dirname, '../../campusmap/src/index.html'));
}));


/* ================================ ERROR HANDLING =================================== */
/** Handle 404 */
server.use((req, res) => {
  res.status(404)
    .sendFile(path.join(__dirname, '../../campusmap/src/index.html'), { error: '404: Page not Found' });
});

/** Handle 500 */
server.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(`Error 500: Internal Server Error\n${error}`);
  next();
});
