import React from 'react';
import moment from 'moment';
import axios from 'axios'

class Ans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      report: 'Report',
      clickedHelpful: false
    }

    this.handleAnswerHelpful = this.handleAnswerHelpful.bind(this);
    this.handleAnswerReport = this.handleAnswerReport.bind(this);
  }

  handleAnswerHelpful (answerid) {
    if (this.state.clickedHelpful === false) {
      axios.put(`/qa/answers/${answerid}/helpful`, {question_id: this.props.questionId})
        .then ((data) => {
          this.props.updateAns(data.data.results);
          this.setState({
            clickedHelpful: true
          })
        })
    }
  }

  handleAnswerReport (answerid) {
    if (this.state.report === 'Report') {
      axios.put(`/qa/answers/${answerid}/report`)
        .then(success => {
          this.setState({
            report: 'Reported'
          })
        })
    }
  }

  render () {
    return(
      <div className='ans'>
          <div className='answer'>{this.props.ans.body}</div>
          <div className='ans-info'>
          {this.props.ans.answerer_name === 'seller' ? <div className='seller'>by {this.props.ans.answerer_name}, {moment(this.props.ans.date, "YYYY-MM-DD").format('LL')}</div> : <div>by {this.props.ans.answerer_name}, {moment(this.props.ans.date, "YYYY-MM-DD").format('LL')}</div>}
          <div>Helpful? <span onClick={() => this.handleAnswerHelpful(this.props.ans.answer_id)}>Yes</span>({this.props.ans.helpfulness})</div>
          <div onClick={() => this.handleAnswerReport(this.props.ans.answer_id)}>{this.state.report}</div>
          </div>
      </div>
    )
  }
}

export default Ans;