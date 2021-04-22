import React from 'react';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: []
    }
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNickName = this.handleNickName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
    this.handleThumbnail = this.handleThumbnail.bind(this);
  }

  handleAnswer (event) {
    this.setState({
      answer: event.target.value
    })
  }

  handleNickName (event) {
    this.setState({
      nickname: event.target.value
    })
  }

  handleEmail (event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePhotos (event) {
    this.setState({
      photos: event.target.files
    })

    console.log(event.target.files)
  }

  handleThumbnail () {
    for (var i = 0; i < this.state.photos.length; i++){
      var photo = document.createElement("img");
      photo.src = URL.createObjectURL(this.state.photos[i]);
      var forDiv = document.getElementById('thumbnail');
      forDiv.appendChild(photo);

    }
  }

  render() {
    return (
      <div className='questionform'>
        <div className='innerForm'>
        <div className='close' onClick={() => this.props.close(false)}>+</div>
        <div className='form-title'>Submit your Answer</div>
        <div className='mini-title'>{this.props.name} : {this.props.question}</div>
        <label>Answer:</label>
        <input></input>
        <label>nickname:</label>
        <input></input>
        <label>Email:</label>
        <input></input>
        <label>Add image:</label>
        <input type='file' multiple onChange={this.handlePhotos}></input>
        <div id='thumbnail'>
          {this.state.photos.length > 0 ? this.handleThumbnail() : null}
        </div>
        <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default AddAnswer