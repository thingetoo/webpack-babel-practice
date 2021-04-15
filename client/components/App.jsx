import React from 'react';
import Cats from './Cats.jsx';
import Questions from './Questions.jsx'
//

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>App.js is connected and working!</h1>
        <Cats />
        <Questions />
      </div>
    )
  }
}

export default App;