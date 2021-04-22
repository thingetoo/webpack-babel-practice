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

  handleSubmit (e) {
    axios.post('/qa/questions', {
      body: this.state.question,
      name: this.state.nickname,
      email: this.state.email,
      product_id: this.props.id
    })
      .then(success => {
        console.log('Successfully sent post request')
        this.setState({
          question: '',
          nickname: '',
          email: ''
        })
      })
      .catch((err) => {
        console.log('Failed to send post request' + err)
      })
      e.preventDefault();
      //check length here
  }

  render () {
    return (
      <div className='questionform'>
        <div className='innerForm'>
        <div className='close' onClick={() => this.props.close(false)}>+</div>
        <div className='form-title'>Ask Your Question</div>
        <div className='mini-title'>About the {this.props.name}</div>
        <label htmlFor='question' >Your Question*</label>
        <textarea type='text' value={this.state.question} id='question' placeholder='Why did you like the product or not?' maxLength="1000" onChange={this.handleQuestion} required></textarea>
        <br></br>
        <label>Nickname*</label>
        <input value={this.state.nickname} placeholder='Example: jackson11!' maxLength="60"  onChange={this.handleName} required></input>
        <span>“For privacy reasons, do not use your full name or email address”</span>
        <label>Email*</label>
        <input type='email' value={this.state.email} maxLength="60"  onChange={this.handleEmail} required></input>
        <input type="submit" onClick={(e) => this.handleSubmit(e)}></input>
        </div>
      </div>
    )
  }
}

export default AddQuestion;