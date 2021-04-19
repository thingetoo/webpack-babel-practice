import React from 'react';
import Answers from './Answers.jsx'
class QuestionEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  // onClick= helpful? yes
   // make a post request
   // set clicked to true.


  render() {
    return (
      <div>
      <div>Q:{this.props.question.question_body}</div>
      <div><Answers questionId={this.props.question.question_id}/></div>
      <div>helpful? Yes({this.props.question.question_helpfulness})</div>
      </div>
    )

  }
}

export default QuestionEntry