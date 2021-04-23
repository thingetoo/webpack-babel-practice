import React from 'react';

class AddAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [],
      max: false
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

    if (event.target.files.length > 5) {
      alert('Only 5 images allowed')
    } else if (event.target.files.length === 5) {
      this.setState({
        photos: event.target.files,
        max: true
      })
    } else {
      this.setState({
        photos: event.target.files
      })
    }


    console.log(event.target.files)
  }

  handleThumbnail () {
    for (var i = 0; i < this.state.photos.length; i++){
      var photo = document.createElement("img");
      photo.src = URL.createObjectURL(this.state.photos[i]);
      photo.className = 'form-img';
      var forDiv = document.getElementById('thumbnail');
      forDiv.appendChild(photo);

    }
  }

  render() {
    return (
      <form className='questionform'>
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
        {this.state.max ? null : <input type='file' multiple onChange={this.handlePhotos}></input>}
        <div id='thumbnail'>
          {this.state.photos.length > 0 ? this.handleThumbnail() : null}
        </div>
        <input type='submit'></input>
        </div>
      </form>
    )
  }
}

export default AddAnswer