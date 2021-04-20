import React from 'react';
import QA from './QA/QA.jsx'
import QuestionBar from './QA/QuestionBar.jsx'
import QuestionList from './QA/QuestionList.jsx'
//
import Overview from './Overview/Overview.jsx';
import RelProductList from './RelProductList.jsx';

import axios from 'axios';
import requests from '../../axios-prefilter'

class App extends React.Component {
  constructor(props) {
    super(props);
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
    axios.get('/products')
      .then((response) => {
        this.productStateChange(response.data)
      });
  }



  render() {
console.log(this.state.currentProduct)
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Overview product={this.state.currentProduct} />
        {/* <Questions /> */}
        <RelProductList productId={this.state.currentProduct.id} />
        <QA productId={this.state.currentProduct.id} name={this.state.currentProduct.name}/>
      </div>
    )
  }
}

export default App;