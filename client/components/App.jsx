import React from 'react';
<<<<<<< HEAD
import Questions from './Questions.jsx'
import QuestionBar from './QuestionBar.jsx'
import Review from './Review.jsx'
//
import Overview from './Overview.jsx';
=======
import QA from './QA.jsx'
import QuestionBar from './QuestionBar.jsx'
//
import Overview from './Overview/Overview.jsx';
>>>>>>> main
import RelProductList from './RelProductList.jsx';

import axios from 'axios';
import requests from '../../axios-prefilter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: []
    }
    this.productStateChange = this.productStateChange.bind(this);
  }

  productStateChange(data) {
    this.setState({
      currentProduct: data[0]
    })
  }

  componentDidMount() {
<<<<<<< HEAD
    console.log(requests)
    axios.get(requests.products)
    .then(response => console.log(response.data));
=======
    axios.get('/products')
      .then((response) => {
        this.productStateChange(response.data)
      });
>>>>>>> main
  }



  render() {




    return (
      <div>
        <Questions />
        <QuestionBar />
        <h1></h1>
        <h1>App.js is connected and working!</h1>
<<<<<<< HEAD
        <Overview />
        <Questions />
        <RelProductList />
        <Review />
=======
        <Overview product={this.state.currentProduct} />
        <Questions />
        <RelProductList productId={this.state.currentProduct.id} />
>>>>>>> main
      </div>
    )
  }
}

export default App;