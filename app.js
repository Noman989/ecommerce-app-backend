const express = require('express');
const { json } = require('body-parser');
const { connect } = require('./mongo');
const api = require('./Routes/api/api');
const cors = require('cors');

(async () => {
    try {
        await connect();
    } catch (err) {
        console.log("Error!!!");
        throw new Error(err);
    }

    const PORT = process.env.PORT || 5000;
    const app = express();

    app.use(cors());
    app.use(json());

    app.use('/api', api)

    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`);
    })

})();
