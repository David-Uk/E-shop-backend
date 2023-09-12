// const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const debug = require('debug')('express');

const ErrorHandler = require('./utils/ErrorHandler');
const userRouter = require('./routes/users');
const apicache = require('apicache');
const cors = require('cors');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

const cache = apicache.middleware;


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/', express.static('uploads'));
app.use(cache('5 minutes'));
app.use(cookieParser());

mongoose
  .connect(process.env.DATABASE)
  .then(() => debug("DB connected"))
  .catch((err) => debug("DB CONNECTION ERROR: ", err));

app.use('/api/v2/users', userRouter);

app.listen(PORT, () => {
  debug(`Listening on port ${PORT}`);
});

// app.use(ErrorHandler);

module.exports = app;
