import React from 'react';
import axios from 'axios';
import QuestionBar from './QuestionBar.jsx'
import QuestionEntry from './QuestionEntry.jsx'
import QuestionList from './QuestionList.jsx'
import Answer from './Answer.jsx'
import AddQuestion from './AddQuestion.jsx'



class QA extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      data: [],
      amount: 2,
      clicked: false
    }
    this.handleQuestions = this.handleQuestions.bind(this);
    this.handleMoreQuestions = this.handleMoreQuestions.bind(this);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleQuestions () {
    axios.get(`/qa/questions/${this.props.productId}/20`)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId){
      this.handleQuestions();
    }
  }

  handleMoreQuestions() {
    var add = this.state.amount
    this.setState({
      amount: add + 2
    })
  }

  handleClicked () {
    this.setState({
      clicked: true
    })
  }

  render() {
   return (
    <div>
    <span className='main-heading'>QUESTIONS &#38; ANSWERS</span>
    <br></br>
    <QuestionBar />
    <QuestionList questions={this.state.data.slice(0,this.state.amount)}/>
    {this.state.data.length > 2 ? <button onClick={this.handleMoreQuestions}>MORE ANSWERED QUESTIONS</button> : null}
    <button onClick={this.handleClicked}>ADD A QUESTION</button>
    {this.state.clicked ? <AddQuestion name={this.props.name}/> : null}
  </div>
   )
  }
}

export default QA