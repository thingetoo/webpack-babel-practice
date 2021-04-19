<<<<<<< HEAD
import axios from 'axios';
import { TOKEN } from './config';

axios.defaults.headers.common['Authorization'] = TOKEN;
=======
const axios = require('axios');
const TOKEN = require('./config');

axios.defaults.headers.common['Authorization'] = TOKEN.TOKEN;
>>>>>>> main

const CAMPUS_CODE = 'hr-rfe';

const requests = {
  products: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products`,
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/reviews`,
<<<<<<< HEAD
  cart: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/cart`
}

export default requests;
=======
  cart: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/cart`,
}

module.exports = requests;
>>>>>>> main
