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
import morgan from 'morgan';

/** API Routes */
import locationsRoutes from './routes/locations';
import searchRoutes from './routes/search';
import infoRoutes from './routes/info';
import commentRoutes from './routes/comments';

/** General Configuration */
dotenv.config({ path: '../../.env' });
const PORT = process.env.PORT || 5000;

/** Instantiate Express Server */
const server = express();
server
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(cors())
  .use(morgan('common'));

/** ================================== API ROUTES ===================================== */
/** Locations */
server.use('/api/locations', locationsRoutes);

/** Search */
server.use('/api/search', searchRoutes);

/** Info */
server.use('/api/info', infoRoutes);

/** Comment */
server.use('/api/comments', commentRoutes);

/** Users */

/** Photos */

/** Login */

/** Register */

/* =============================== FRONT END ROUTE =================================== */
/** Serve the frontend in production */
if (process.env.NODE_ENV === 'production') {
  console.log('production mode');

  server
    .use(express.static(path.join(__dirname, '../../campusmap/dist/webpack')));

  server.get('*', ((req, res) => {
    res.sendFile(path.join(__dirname, '../../campusmap/dist/webpack/index.html'));
  }));
}

/* ================================ ERROR HANDLING =================================== */
/** Handle 404 */
// server.use((req, res) => {
//   res.status(404)
//     .sendFile(path.join(__dirname, '../../campusmap/dist/webpack/index.html'),
//      { error: '404: Page not Found' });
// });

/** Handle 500 */
server.use((error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send(`Error 500: Internal Server Error\n${error}`);
  next();
});

/** Run the server on the given port */
server.listen(PORT);
console.log(`Listening on port ${PORT}`);
