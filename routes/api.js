const express = require('express');
const router = express.Router();


///getiing a list of developers from the database
router.get('/devops' , (req,res) => {
   res.send({type : "GET"});

});


/// adding a developer into the database  
router.post('/devops' , (req,res) => {
   console.log(req.body);
   res.send({
      type : "POST",
      name:req.body.name,
	Location : req.body.Location,
	specialisation  : req.body.specialisation
   
   });

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