import express from 'express';
import Repository from './../models/DAO/repository';
import pessoa from './../models/entities/pessoa';

const router = express.Router();
const model = new Repository(pessoa);

//GET ALL
router.get('/',model.get);
//GET BY ID
router.get('/:id',model.getById);
//INSERT OR UPDATE
router.post('/',model.save);
//DELETE 
router.delete('/:id',model.remove);

