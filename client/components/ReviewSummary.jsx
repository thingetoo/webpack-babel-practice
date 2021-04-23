import React from 'react';
import axios from 'axios';
import Rating from 'react-star-ratings';

import App from './App.jsx';
import Review from './Review.jsx';

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meta: [],
      productId: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        productId: prevProps.data
      })
      this.fetchMeta();
    }
  }

  fetchMeta() {
    axios.get(`/reviews/meta/${this.props.data}`)
      .then((response) => {
        this.setState({
          meta: response.data
        })
      })
      .catch((err) => [
        // console.log(err)
      ])
  }


  render() {
    var score = 0;
    var ratings = this.state.meta.ratings;
    var scoreCount = 0;
    for (var key in ratings) {
      score += (key * ratings[key]);
      scoreCount += parseInt(ratings[key]);
    }
    score /= scoreCount;

    var recommendations = this.state.meta.recommended;
    var trueCount = 0;
    var recInPercentage = '';
    var recCount = 0;
    for (var key in recommendations) {
      if (key == 'true') {
        trueCount += parseInt(recommendations[key]);
      }
      recCount += parseInt(recommendations[key]);
    }
    trueCount *= 100 / recCount;


    return (
      <div id='score-summary'>
        <p id='average-score'>{score}</p>
        <p id='recommendations'>{trueCount}% of reviews recommend this product</p>
        <div id='star-counts'>
          <p>5 stars</p>
          <p>4 stars</p>
          <p>3 stars</p>
          <p>2 stars</p>
          <p>1 stars</p>
        </div>
      </div>
    )
  }
}

export default ReviewSummary;
