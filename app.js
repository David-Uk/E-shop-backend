const express = require('express');
const ErrorHandler = require('./utils/ErrorHandler');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: '.env'
    });
}

app.use(ErrorHandler);

module.exports = app;