import React from 'react'
import axios from 'axios';
import Answer from './Answer.jsx'

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }

    this.getAnswers = this.getAnswers.bind(this);
  }

  getAnswers() {
    axios.get(`/qa/answers/${this.props.questionId}/answers`)
    .then(response => {
      this.setState ({
        answers: response.data.results
      })
    })
  }

  componentDidMount () {
      this.getAnswers();

  }

  render() {
    return (
      <div>
        {this.state.answers.length > 2 ? <Answer answer={this.state.answers.slice(0,2)}/> : <Answer answer={this.state.answers}/>}
        <div>LOAD MORE ANSWERS</div>
      </div>

    )
  }
}

export default Answers