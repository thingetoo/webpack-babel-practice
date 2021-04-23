const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const requests = require('../axios-prefilter.js');

var bodyParser = require('body-parser')


const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', (req, res) => {
//   res.render('index.html')
// })

app.get('/products', (req, res) => {
  // res.sendStatus(200);
  axios.get(requests.products)
    .then((response) => {
      res.send(response.data)
    });
})

app.get('/product/:productId/styles', (req, res) => {
  //styles
  axios.get(`${requests.products}/${req.params.productId}/styles`)
    .then((response) => {
      res.json(response.data)
    })
})

app.get('/reviews/:product_Id', (req, res) => {
  axios.get(`${requests.reviews}/?product_id=${req.params.product_Id}`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      // console.log(err)
    })
})

app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`${requests.reviews}/meta/?product_id=${req.params.product_id}`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      // console.log(err)
    })
})


app.get('/reviews/:product_Id/:sort', (req, res) => {
  axios.get(`${requests.reviews}/?product_id=${req.params.product_Id}&sort=${req.params.sort}`)
    .then((response) => {
      res.json(response.data)
    })
    .catch((err) => {
      // console.log(err)
    })
})

app.listen(port, () => {
  console.log(`Server listening at localhost:${port}!`);
});