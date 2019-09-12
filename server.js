const express           = require('express');
const bodyParser        = require('body-parser');
const mongoose          = require('mongoose')
const Devops            = require('./models/devops')

// Loading the routes
const apiRouter = require('./routes/api'); 

const app = express();

// connect to mongobg
mongoose.connect('mongodb://localhost/devopsgo');
mongoose.Promise = global.Promise;

///body-parser middleware for handling post requests 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// using the api
app.use('/api' , apiRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT,(req,res) => {
   console.info(` server is running on PORT ${PORT}.....  `);
});
