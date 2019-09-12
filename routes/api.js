const express = require('express');
const router = express.Router();


///getiing a list of developers from the database
router.get('/devops' , (req,res) => {
   res.send({type : "GET"});

});


/// adding a developer into the database  
router.post('/devops' , (req,res) => {
   res.send({type : "POST"});

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