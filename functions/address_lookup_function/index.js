// const axios = require('axios');
const express = require('express');
const postcodes = require('node-postcodes.io');
//const bodyParser = require('body-parser');
var bodyParser = require("body-parser");
const app = express();

app.use(
    bodyParser.urlencoded({ extended: true })
);

app.post('/addressLookup', async(req, res) => {
	console.log(JSON.stringify(req.body));
	console.log('incoming data to lookup is ' +req.body.postcode);
	console.log(req.body.postcode);
	// single
let result = await postcodes.lookup(req.body.postcode);
console.log(result);
res.send(result);

});
module.exports = app;