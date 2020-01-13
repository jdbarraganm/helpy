import express, { json } from 'express'

const app = express();

//Routes

import IndexRoutes from './routes/index.routes'
import BeatsRoutes from './routes/beats.routes'
import AbnormalRoutes from './routes/abnormal.routes'

//Settings

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(json());


//Routes

app.use(IndexRoutes);
app.use( '/beats', BeatsRoutes);
app.use( '/abnormal', AbnormalRoutes);

export default app;