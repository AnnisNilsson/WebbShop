"use strict";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = require('./Routes/routes')();
app.use('/api', router);
app.server = app.listen(port, () => {
    console.log(`running on port ${port}`);
});
module.exports = app;
//# sourceMappingURL=app.js.map