const app = require("./app");
const connectDatabase = require('./db/Database');

process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down for uncaught error`);
});

if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({
        path: '.env'
    });
}

connectDatabase();

const server = app.listen(process.eventNames.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

process.on('unhandledRejection', err => {
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down server for unhandled promise rejection`);

    server.close(() => {
        process.exit(1);
    });
});