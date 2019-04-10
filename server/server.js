const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');



app.use(express.json({urlencoded: true}));
app.use(cors());
app.use(express.static('dist'))

app.get('/api/navbar/products', (req, res) => {
    //get req to navbar
    axios.get('http://ec2-18-223-247-62.us-east-2.compute.amazonaws.com/api/navbar/products')
    .then(dataz => {
        let placeholder = dataz.data;
        res.send(placeholder);
    })
    .catch(err => {
        console.log(err);
    })


})

app.get('/api/carousel/products', (req, res) => {
    //get req to carousel
    axios.get('http://ec2-13-58-19-111.us-east-2.compute.amazonaws.com/api/carousel/products')
    .then(dataz => {
        let placeholder = dataz.data;
        res.send(placeholder);
    })
    .catch(err => {
        console.log(err);
    })


})


app.listen(process.env.PORT || 3020, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log('we in dis');
    }
});