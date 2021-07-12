require('dotenv').config();
const express = require('express');
const cors = require('cors')

const responseManager = require('./lib/response-manager')

const app = express();
const mongoose = require('./config/mongoose');
const appConfig = require('./config/vars')

mongoose.connect();

app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(responseManager)

app.get('/', async (req, res) => {
  return res.successResponse({
    code: 200,
    message: 'Welcome to node-express-mongo-template',
    response: {},
  });
});

require('./routes')(app);

const port = appConfig.port || 3500;

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = app;