import express from 'express';
import imovelDAO from '../models/DAO/imovelDAO';
import passport from 'passport';
const router = express.Router();
const dao = new imovelDAO();

//GET ALL
router.get('/', dao.all);
//GET BY ID
router.get('/:id', dao.getById);
//INSERT
router.post('/', passport.authenticate('token', { session: false }), dao.save);
//UPDATE
router.put('/:id', passport.authenticate('token', { session: false }),dao.update);
//DELETE 
router.delete('/:id', passport.authenticate('token', { session: false }), dao.remove);

export default router;
