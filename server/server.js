const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config()


app.use(express.json({urlencoded: true}));
app.use(cors());
app.use(express.static('dist'))



app.listen(process.env.PORT || 3020, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log('we in dis');
    }
});