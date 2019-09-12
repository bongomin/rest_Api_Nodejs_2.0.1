const express           = require('express');

// Loading the routes
const apiRouter = require('./routes/api'); 

const app = express();




// using the api
app.use('/api' , apiRouter);




const PORT = process.env.PORT || 3000;

app.listen(PORT,(req,res) => {
   console.info(` server is running on PORT ${PORT}.....  `);
});
