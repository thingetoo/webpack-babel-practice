import React from 'react';
import Questions from './Questions.jsx'
import QuestionBar from './QuestionBar.jsx'
//
import Overview from './Overview.jsx';
import RelProductList from './RelProductList.jsx';

import axios from 'axios';
import requests from '../../axios-prefilter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProduct: null
    }
    this.productStateChange = this.productStateChange.bind(this);
  }

  productStateChange(data) {
    this.setState({
      currentProduct: data[0]
    })
  }

  componentDidMount() {

    axios.get(requests.products)
      .then((response) => {
        this.productStateChange(response.data)
      });
  }



  render() {
    var campus = this.state.currentProduct === null ? <h1></h1> : <h1>{this.state.currentProduct.campus}</h1>;



    return (
      <div>
        {campus}
        <Questions />
        <QuestionBar />
        <h1></h1>
        <h1>App.js is connected and working!</h1>
        <Overview />
        <Questions />
        <RelProductList />
      </div>
    )
  }
}

export default App;