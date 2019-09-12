const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating developers Schema
const devopsShema = new Schema({
   name :{
      type :String,
      required:[true ,'name filed is required']
   },
   field:{
      type: String,
      required:[true, 'Ran is required please !']
   },
   available :{
      type :Boolean,
      default:false
   }

   ///add Geo Location



});

const Devops = mongoose.model('devops',devopsShema);
//exporting the model such that it can be used in other files
module.exports = Devops;