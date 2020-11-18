import express from 'express';
import routes from './routes/routes';
import './config/db';

const App = express()

App.use(express.json())
App.use(routes)

App.listen(3333, ()=> console.log('App is runing on port 3333'))