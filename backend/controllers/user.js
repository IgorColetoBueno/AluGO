import express from 'express';
import UserDAO from './../models/DAO/userDAO';

const router = express.Router();
const dao = new UserDAO();

//GET ALL
router.get('/',dao.all);
//GET BY ID
router.get('/:id',dao.getById);
//INSERT
router.post('/',dao.save);
//UPDATE
router.put('/:id',dao.update);
//DELETE 
router.delete('/:id',dao.remove);

export default router;
