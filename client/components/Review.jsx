import React from 'react';
import App from './App.jsx';
import axios from 'axios';
import requests from '../../axios-prefilter';
import ReviewsList from './ReviewsList.jsx';
import ReviewAdd from './ReviewAdd.jsx';
import ReviewSummary from './ReviewSummary.jsx';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: []
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({productId: prevProps.item});
      this.fetchReviews();
    }
  }

  fetchReviews () {
    axios.get(`/reviews/${this.props.item}`)
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      });

  }

  render() {
    return (
      <div>
        <h2>Ratings {'&'} Review</h2>
        <ReviewSummary data={this.props.item}/>
        <ReviewsList data={this.state.reviews}/>
        <ReviewAdd data={this.props.item}/>
      </div>
    )
  }
}

export default Review;