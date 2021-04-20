import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return(
      <div>
        {this.props.answer.map((ans, index)=> (
          <div key={index}>
          <div>A: {ans.body}</div>
          <div>Add Answer</div>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Answer;