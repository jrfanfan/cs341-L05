const express = require('express');
const staticRrouter = express.Router();


// Static Routes
staticRrouter.use(express.static("frontend"));

module.exports = staticRrouter;