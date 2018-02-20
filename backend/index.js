//Importações
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import server from './src/config/server';
import routes from './src/config/routes';
import passport from 'passport';
import auth from './src/config/auth/index';
import User from './src/models/entities/user';
//Uso do express
const app = express();

//Definições de middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
//Definições de autenticação
auth(passport);

//Chamada ao servidor
server(app);

//Definição das rotas
routes(app, passport);
