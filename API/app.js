const express = require('express');
//adding express 
//a minimal, flexible node.jsweb appframework 
//makes it possible to listen on network ports.
const cors = require('cors');
//is needed when calling API from other domains.
//each domain has protection from cross-domain calls for security reasons to precent cross-site-attacks
const bodyParser = require('body-parser');
//makes it possible to intercept and modify requests or response objects body
//with json
const app = express();
//creates app variable that contains an instance of express app, this object configures and runs your API.
//must be added before any other middleware
const port = process.env.PORT || 3000;
//our provided port (3000) + backup enviroment-variable port


app.use(cors());
//adds the cors middleware
app.options('*', cors());
//configures allowed domains
//irl you would be more restrictive and only allow certain domains

app.use(bodyParser.urlencoded({extended:true}));
//tells de parser that you expect URLencoded data
app.use(bodyParser.json());
//specifies that the parser presents data in JSON format

const teacherRouter = require('./routes/teacherRouter')();
app.use('/api', teacherRouter);
const classRouter = require('./routes/classRouter')();
app.use('/api', classRouter);

app.server = app.listen(port, () => {
    console.log(`running on port ${port}`);
});
//add a middleware function named listener
//listens on the provided port
//to visually see that it is listening, we added a console log.
/*has 2 parameters
1 the port number
2 function to execute when it starts.*/
module.exports = app;
//must export the app.js file because it's a module
//must export the app constant in the end of the file
