import express from 'express';
import PessoaDAO from './../models/DAO/pessoaDAO';
import passport from 'passport';

const router = express.Router();
const dao = new PessoaDAO();

//GET ALL
router.get('/', passport.authenticate('token', { session: false }),dao.all);
//GET BY ID
router.get('/:id', passport.authenticate('token', { session: false }),dao.getById);
//INSERT
router.post('/',dao.save);
//UPDATE
router.put('/:id', passport.authenticate('token', { session: false }),dao.update);
//DELETE 
router.delete('/:id', passport.authenticate('token', { session: false }),dao.remove);

export default router;
