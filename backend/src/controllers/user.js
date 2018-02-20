import express from 'express';
import UserDAO from './../models/DAO/userDAO';
import token from '../config/auth/token'
import passport from 'passport';
const router = express.Router();
const dao = new UserDAO();

//POST - GENERATE TOKEN
router.post('/token', token);
//GET ALL
router.get('/', passport.authenticate('token', { session: false }), dao.all);
//GET BY ID
router.get('/:id', passport.authenticate('token', { session: false }), dao.getById);
//INSERT
router.post('/',dao.save);
//UPDATE
router.put('/:id', passport.authenticate('token', { session: false }), dao.update);
//DELETE 
router.delete('/:id', passport.authenticate('token', { session: false }), dao.remove);

export default router;
