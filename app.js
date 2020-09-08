import express from 'express';
import dotenv from 'dotenv'; dotenv.config();
import { Log } from './class/Class.js';
import { SERVER, DIRECTORY, ROUTES } from './config.js';

import { indexRouter } from './routes/index.js';

export const HTTP_SERVER = express();
export default HTTP_SERVER;

HTTP_SERVER.set('views', DIRECTORY.VIEWS);
HTTP_SERVER.set('view engine', SERVER.VIEW_ENGINE);

HTTP_SERVER.use(express.json());
HTTP_SERVER.use(express.urlencoded({ extended: false }));
HTTP_SERVER.use(express.static(DIRECTORY.PUBLIC));

HTTP_SERVER.use(ROUTES.INDEX.path, indexRouter);