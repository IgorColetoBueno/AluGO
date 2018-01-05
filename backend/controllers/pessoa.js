import express from 'express';
import Repository from './../models/DAO/repository';
import PessoaDAO from './../models/DAO/pessoaDAO';
import pessoa from './../models/entities/pessoa';

const router = express.Router();
const dao = new PessoaDAO(pessoa);

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
