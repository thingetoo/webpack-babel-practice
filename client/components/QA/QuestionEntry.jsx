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


  handleHelpful() {
    if (this.state.clickedHelpful === false) {
      axios.put(`/qa/questions/${this.props.question.question_id}/helpful`, { product_id: this.props.productId })
        .then((data) => {
          this.props.update(data.data)
          this.setState({
            clickedHelpful: true
          })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  // make it work when page reloads

  handleClickForm(boolean) {
    this.setState({
      clickedForm: boolean
    })
  }

  render() {
    return (
      <div>
        <div className='question'>Q:{'  ' + this.props.question.question_body}</div>

        <div className='questionLink'>

          <div className='link-helpful'>helpful? <span onClick={this.handleHelpful}>Yes</span>({this.props.question.question_helpfulness}) </div>
          <div className='link-answe' onClick={() => this.handleClickForm(true)}> Add Answer</div>
        </div>

        {this.state.clickedForm ? <AddAnswer question={this.props.question.question_body} questionId={this.props.question.question_id} name={this.props.name} close={this.handleClickForm} /> : null}
        <div className='ans-section'>
          <div className='A'>A:</div>
          <Answers questionId={this.props.question.question_id} />
        </div>
      </div>
    )

  }
}

export default QuestionEntry