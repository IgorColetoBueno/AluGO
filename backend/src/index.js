//Importações
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import server from './config/server';
import routes from './config/routes';
import passport from 'passport';
import auth from './config/auth/index';
//Uso do express
const app = express();

//Definições de middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
//Definições de autenticação
auth(passport);
//Chamada ao servidor
server(app);
//Definição das rotas
routes(app, passport);
