import React from 'react';
import Cats from './Cats.jsx';
import Overview from './Overview.jsx';
import RelProductList from './RelProductList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

    let headers = {
      Authorization: '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'
    }
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {headers})
    .then(response => console.log(response.data));
  }



  render() {




    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Overview />
        <Cats />
        <RelProductList />
      </div>
    )
  }
}

export default App;