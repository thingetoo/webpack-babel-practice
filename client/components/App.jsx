import React from 'react';
import Cats from './Cats.jsx';
import RelProductList from './RelProductList.jsx';
import TOKEN from '../../config.js';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Cats />
        <RelProductList />
      </div>
    )
  }
}

export default App;