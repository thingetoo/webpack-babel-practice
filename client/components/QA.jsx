import React from 'react';
import QuestionBar from './QuestionBar.jsx'
import QuestionList from './Questionlist.jsx'
import QuestionEntry from './QuestionEntry.jsx'


class QA extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      data: []
    }
  }


  render() {
   return (
    <div>
    <h1>QUESTIONS &#38; ANSWERS</h1>
    <QuestionBar />
    {/* <QuestionList /> */}
    <button>MORE ANSWERED QUESTIONS</button>
    <button>ADD A QUESTION</button>
  </div>
   )
  }
}

export default QA