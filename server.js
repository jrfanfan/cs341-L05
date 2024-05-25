// Import the express module
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require('./connectDB/connectMongoose')
const bodyParser = require('body-parser')
const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./swagger')
const dataRoute = require('./routes/dataRoutes')
const static = require("./routes/indexRoute")




const app = express();


//Midleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
mongoose(); 




// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


// Static index route
app.use(static);
//route data
app.use('/', dataRoute);

  



// Start the server and listen to the port
//Process .env
const PORT = process.env.PORT;
const HOST = process.env.HOST;


/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(PORT, () => {
  console.log(`app listening on: ${HOST}:${PORT} `)
});
