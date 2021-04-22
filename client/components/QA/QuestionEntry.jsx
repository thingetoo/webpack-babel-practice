import React from 'react';
import Answers from './Answers.jsx'
import axios from 'axios';
import AddAnswer from './AddAnswer.jsx'

class QuestionEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedHelpful: false,
      clickedForm: false
    }
    this.handleHelpful = this.handleHelpful.bind(this);
    this.handleClickForm = this.handleClickForm.bind(this);
  }


  handleHelpful (){
    if (this.state.clickedHelpful === false){
      axios.put(`/qa/questions/${this.props.question.question_id}/helpful`)
      .then((res) => {
        this.setState({
          clickedHelpful: true
        })
      })
    }
  }
// make it work when page reloads

handleClickForm (boolean) {
  this.setState({
    clickedForm: boolean
  })
}

  render() {
    return (
      <div>
      <div className='question'>Q:{'  '+ this.props.question.question_body}</div>

      <div className='questionLink'>

      <div>helpful? <span onClick={this.handleHelpful}>Yes({this.props.question.question_helpfulness})</span></div>
      <div className='help'>{' !!!! '}</div>
      <div onClick={() => this.handleClickForm(true)}>Add Answer</div>
      </div>

      {this.state.clickedForm ? <AddAnswer question={this.props.question.question_body} name={this.props.name} close={this.handleClickForm}/> : null}

      <Answers questionId={this.props.question.question_id}/>
      </div>
    )

  }
}

export default QuestionEntry