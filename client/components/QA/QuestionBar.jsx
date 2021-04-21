import React from 'react';

class QuestionBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: "",
      length: 0
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch (event) {
    this.setState({
      search: event.target.value
      // length: event.length
    })

    // if length > 3 filter props.questions and QA state = filtered
  }
  // Defines image as sumbit button https://www.w3schools.com/tags/att_input_type_image.asp
  //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image

  render () {
    return (
      <input className='searchBar' placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleSearch}></input>
    )
  }
}

export default QuestionBar;