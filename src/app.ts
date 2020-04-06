import express from 'express';
import morgan from 'morgan'
import path from 'path'

export const app = express();

import IndexRoutes from './routes/index'

//settings
app.set('port', process.env.Port || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', IndexRoutes);

// this folder for this aplicaction be used arch public
app.use('/uploades', express.static(path.resolve('uploades')))