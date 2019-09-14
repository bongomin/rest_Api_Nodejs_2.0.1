const express = require('express');
const router  = express.Router();
const Devops  = require('../models/devops');


///getiing a list of developers from the database
router.get('/devops' , (req,res,next) => {
   /*
   Devops.find({})
   .then((alldevops) => {
      res.send(alldevops);
   })
   */
  Devops.aggregate()
  .near({
    near: {
      type: "Point",
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    $maxDistance: 300000, // 300 KM
    spherical: true,
    distanceField: "distance"
  })
  .then(alldevops => {
    console.log(alldevops);
    if (alldevops) {
      if (alldevops.length === 0)
        return res.send({
          message:
            "maxDistance is too small, or your query params {lng, lat} are incorrect (too big or too small)."
        });
      return res.send(alldevops);
    }
  })
  .catch(next);

});



/// adding a developer into the database  
router.post('/devops' , (req,res,next) => {
   // var devops = new Devops(req.body);
   // devops.save();
      
//  better alternative
    Devops.create(req.body)
    .then(devop => {
      res.send(devop);
    }).catch(next);
       //this //creates and saves automaticlly no need forsave 
});

///update th developers info in the database
router.put('/devops/:id' , (req,res,next) => {
   Devops.updateOne({_id :req.params.id} , req.body)
   .then(() => {
      Devops.findOne({_id :req.params.id})
      .then((newUpdatedDevop) => {
         res.send(newUpdatedDevop); 
      });     
   })
});


//// delete a developer from the database
router.delete('/devops/:id' , (req,res,next) => {
  Devops.remove({_id :req.params.id})
  .then((devop) =>{
     res.send(devop);
  }).catch(
     res.send('not deleted')
  );
});


module.exports = router;