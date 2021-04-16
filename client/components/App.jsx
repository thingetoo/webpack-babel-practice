import React from 'react';
import Questions from './Questions.jsx'
import QuestionBar from './QuestionBar.jsx'
//

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Questions />
        <QuestionBar />
        <h1></h1>
      </div>
    )
  }
}

export default App;