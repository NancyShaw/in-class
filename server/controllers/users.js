/** */

const express = require('express');
const model = require('../models/users');

const app = express.Router();

    app
        .get('/', (req, res) =>{
            res.send( model.GetAll() );           
        }  )
        // : means match to anything (ie, users/ anything)
        .get('/:post_id',(req,res)=> res.send( model.Get(req.params.post_id) ))
        .post('/', (req, res)=> { 
            res.send( model.Add(req.body) );
        })
        .patch('/:post_id',(req,res)=> res.send(
            model.Update(req.params.user_id, req.body)
        ))
        .delete('/:post_id',(req,res)=> res.send(model.Delete(req.params.post_id) ) )
        

module.exports = app;