const express           = require('express');
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose')
const Devops            = require('./models/devops')

// Loading the routes
const apiRouter = require('./routes/api'); 

const app = express();


// hadling errors with promise
mongoose.Promise = global.Promise;
// connection to mongoose
mongoose.connect('mongodb://localhost/devopsgo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

///body-parser middleware for handling post requests 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// using the api
app.use('/api' , apiRouter);

// error handling middleware created to handle errors

app.use((err,req,res,next) => {
  // console.log(err);
  res.status(422).send({'error' : err.message});
});




const PORT = process.env.PORT || 3000;

app.listen(PORT,(req,res) => {
   console.info(` server is running on PORT ${PORT}.....  `);
});
