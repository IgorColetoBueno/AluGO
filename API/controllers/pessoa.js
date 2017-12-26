import express from 'express';
import Repository from './../models/DAO/repository';
import pessoa from './../models/entities/pessoa';

const router = express.Router();
const model = new Repository(pessoa);

//GET ALL
router.get('/',model.all);
//GET BY ID
router.get('/:id',model.getById);
//INSERT
router.post('/',model.save);
//UPDATE
router.put('/:id',model.update);
//DELETE 
router.delete('/:id',model.remove);

export default router;
