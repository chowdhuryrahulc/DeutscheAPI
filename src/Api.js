const express = require('express');
require('../src/db/connection'); // Import connection.js
const router = require('../src/routers/router') // Import router.js

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json()); // Otherwise JSON wont be updated in the DB
app.use(router); // Register the router

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})