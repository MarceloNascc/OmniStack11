const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

const { errors } = require('celebrate');
app.use(errors());

app.listen(3006, () => console.log('Running on port 3006'));