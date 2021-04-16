import React from 'react';
import Cats from './Cats.jsx';
import Questions from './Questions.jsx'
import Overview from './Overview.jsx';
import RelProductList from './RelProductList.jsx';

import axios from 'axios';
import requests from '../../axios-prefilter'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(requests)
    axios.get(requests.cart)
    .then(response => console.log(response.data));
  }



  render() {




    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Overview />
        <Cats />
        <Questions />
        <RelProductList />
      </div>
    )
  }
}

export default App;