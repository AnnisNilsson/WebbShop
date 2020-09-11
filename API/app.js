const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//GETCUSTOMER
const customerRouter = require('./Routes/customerRouter')();
app.use('/api', customerRouter);
//GETBRAND
const brandRouter = require('./Routes/brandRouter')();
app.use('/api', brandRouter);



app.server = app.listen(port, () => {
    console.log(`running on port ${port}`);
});

module.exports = app;

