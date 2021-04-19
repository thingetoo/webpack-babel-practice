import React from 'react';
import Questions from './Questions.jsx'
import QuestionBar from './QuestionBar.jsx'
import Review from './Review.jsx'
//
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
    axios.get(requests.products)
    .then(response => console.log(response.data));
  }



  render() {




    return (
      <div>
        <Questions />
        <QuestionBar />
        <h1></h1>
        <h1>App.js is connected and working!</h1>
        <Overview />
        <Questions />
        <RelProductList />
        <Review />
      </div>
    )
  }
}

export default App;