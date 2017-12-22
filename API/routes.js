import express from 'express';
import pessoa from './../controllers/pessoa';

export default (app) => {
    app.use('/pessoa',pessoa);
} 