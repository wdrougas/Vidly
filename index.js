const Joi = require('joi');
const logger = require("./logger")
const express = require('express');
const helmet = require('helmet')
const app = express();
const genres = require('./routes/genres')
const home = require('./routes/home')

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use('/api/genres', genres)

app.use(logger) 


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));