//Importações
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import server from "./server"
import routes from './routes'

//Uso do express
const app = express();

//Definições de middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//Chamada ao servidor
server(app);

//Definição das rotas
routes(app);
