import express from 'express';
import imovelDAO from '../models/DAO/imovelDAO';

const router = express.Router();
const dao = new imovelDAO();

//GET ALL
router.get('/', dao.all);
//GET BY ID
router.get('/:id', dao.getById);
//INSERT
router.post('/', dao.save);
//UPDATE
router.put('/:id', dao.update);
//DELETE 
router.delete('/:id', dao.remove);

export default router;
