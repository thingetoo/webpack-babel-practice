import React from 'react';
import axios from 'axios';

class AddQuestion extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      question: '',
      nickname: '',
      email: ''
    }

    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuestion (event) {
    this.setState({
      question: event.target.value
    })
  }

  handleName (event) {
    this.setState({
      nickname: event.target.value
    })
  }

  handleEmail (event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit () {
    axios.post('/qa/questions', {
      body: this.state.question,
      name: this.state.nickname,
      email: this.state.email,
      product_id: this.props.id
    })
      .then(success => {
        console.log('Successfully sent post request')
      })
      .catch((err) => {
        console.log('Failed to send post request' + err)
      })
  }

  render () {
    return (
      <div className='questionform'>
        <h4>Ask Your Question</h4>
        <h5>About the {this.props.name}</h5>
        <label>Your Question *</label>
        <br></br>
        <textarea placeholder='Why did you like the product or not?' maxLength="1000" onChange={this.handleQuestion}></textarea>
        <br></br>
        <label>nickname:</label>
        <input placeholder='Example: jackson11!' maxLength="60" onChange={this.handleName}></input>
        <div>“For privacy reasons, do not use your full name or email address”</div>
        <br></br>
        <label>Email:</label>
        <input maxLength="60" onChange={this.handleEmail}></input>
        <input type="submit" onClick={this.handleSubmit}></input>

      </div>
    )
  }
}

export default AddQuestion;