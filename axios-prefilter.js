import axios from 'axios';
import TOKEN from './config';


axios.defaults.headers.common['Authorization'] = TOKEN;

const CAMPUS_CODE = 'hr-rfe';

const requests = {
  products: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/products`,
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/reviews`,
  cart: `https://app-hrsei-api.herokuapp.com/api/fec2/${CAMPUS_CODE}/cart`
}

export default requests;