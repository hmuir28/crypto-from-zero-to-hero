import bodyParser from 'body-parser';
import cors from 'cors';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';

import AuthRoutes from './routes/auth.routes';

import config from './config/config';

// import './config/mongodb.config';

dotenv.config({ path: __dirname + '/.env'});

import './config/passport.config';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 5000;

app.use('/', AuthRoutes);

app.listen(port, () => console.log('Server running on port ' + port))
