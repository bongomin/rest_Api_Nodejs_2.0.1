const express = require('express');
const router  = express.Router();
const Devops  = require('../models/devops');


///getiing a list of developers from the database
router.get('/devops' , (req,res) => {
   res.send({type : "GET"});

});


/// adding a developer into the database  
router.post('/devops' , (req,res) => {
   // var devops = new Devops(req.body);
   // devops.save();
      
//  better alternative
    Devops.create(req.body)
    .then(devop => {
      res.send(devop);
    })   //this //creates and saves automaticlly no need forsave 

   
   

});

///update th developers info in the database
router.put('/devops/:id' , (req,res) => {
   res.send({type : "DELETE"});

});


//// delete a developer from the database
router.delete('/devops/:id' , (req,res) => {
   res.send({type : "DELETE"});

});


module.exports = router;