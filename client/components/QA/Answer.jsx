import React from 'react';
import moment from 'moment';
import axios from 'axios'

class Answer extends React.Component {
  constructor(props) {
    super(props)

    this.handleAnswerHelpful = this.handleAnswerHelpful.bind(this);
  }

  handleAnswerHelpful (answerid) {
    var count = 0;
    if (count === 0) {
      axios.put(`/qa/answers/${answerid}/helpful`)
        .then (success => {
          count+= 1;
          console.log(answerid)
        })
    }
  }

  render () {
    return(
      <div>
        {this.props.answer.map((ans, index)=> (
          <div key={index}>
          <div><span className='A'>A:</span> {ans.body}</div>
          <div>by {ans.answerer_name}, {moment(ans.date, "YYYY-MM-DD").format('LL')}</div>
          <div>Helpful? <span onClick={() => this.handleAnswerHelpful(ans.answer_id)}>Yes({ans.helpfulness})</span></div>
          <div>Report</div>
          </div>
        )
        )}
      </div>
    )
  }
}

export default Answer;