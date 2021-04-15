import React from 'react';
import Cats from './Cats.jsx';
import Overview from './Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Overview />
        <Cats />
      </div>
    )
  }
}

export default App;