import React from 'react';
import Answers from './Answers.jsx'
import axios from 'axios';
class QuestionEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleHelpful = this.handleHelpful.bind(this);
  }


  handleHelpful (){
    if (this.state.clicked === false){
      axios.put(`/qa/questions/${this.props.question.question_id}/helpful`)
      .then((res) => {
        this.setState({
          clicked: true
        })
      })
    }
    console.log(this.state.clicked)
  }
// make it work when page reloads
  render() {
    return (
      <div>
      <div>Q:{this.props.question.question_body}</div>
      <div><Answers questionId={this.props.question.question_id}/></div>
      <div onClick={this.handleHelpful}>helpful? Yes({this.props.question.question_helpfulness})</div>
      <div></div>
      </div>
    )

  }
}

export default QuestionEntry