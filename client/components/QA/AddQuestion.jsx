import React from 'react';

class AddQuestion extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className='questionform'>
        <h4>Ask Your Question About {this.props.name}</h4>
        <label>Your Question *</label>
        <textarea></textarea>
        <label>nickname:</label>
        <input placeholder='Example: jackson11!'></input>
        <div>“For privacy reasons, do not use your full name or email address”</div>
        <label>Email:</label>
        <input></input>
        <input type="submit"></input>

      </div>
    )
  }
}

export default AddQuestion;