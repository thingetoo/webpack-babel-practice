import React from 'react';
import QA from './QA.jsx'
import QuestionBar from './QuestionBar.jsx'
//
import Overview from './Overview/Overview.jsx';
import RelProductList from './RelatedProdList/RelProductList.jsx';

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
        console.log(response.data);
        this.productStateChange(response.data)
      });
  }



  render() {




    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Overview product={this.state.currentProduct} />
        {/* <Questions /> */}
        <RelProductList productId={this.state.currentProduct.id} />
        <QA />
        <QuestionBar />
      </div>
    )
  }
}

export default App;