const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  Creating GeoLocation Schema
const geoSchema = new Schema(
   {
         "type": {
            type:String,
            default:"Point"
         },
         "coordinates":{
            type:[Number],
            createIndexes:"2dsphere"
         }
   }
);

// creating developers Schema
const devopsShema = new Schema({
   name :{
      type :String,
      required:[true ,'name filed is required']
   },
   field:{
      type: String,
      required:true,
   },
   available :{
      type :Boolean,
      default:false
   },
   ///add Geoshema from up 
   geometry:geoSchema



});

const Devops = mongoose.model('devops',devopsShema);
//exporting the model such that it can be used in other files
module.exports = Devops;