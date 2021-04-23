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
      productId: '',
      scoreCounts: {},
      characteristics: {}
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
          meta: response.data,
          scoreCounts: response.data.ratings,
          characteristics: response.data.characteristics
        })
        console.log(response.data)
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


    const isSize = this.state.characteristics.Size;
    const isWidth = this.state.characteristics.Width;
    const isComfort = this.state.characteristics.Comfort;
    const isQuality = this.state.characteristics.Quality;
    const isLength = this.state.characteristics.Length;
    const isFit = this.state.characteristics.Fit;

    let size, width, comfort, quality, length, fit;

    if (isSize) {
      size = <div id='measurement-bar'>Size<p>{isSize.value}</p></div>
    }
    if (isWidth) {
      width = <div id='measurement-bar'>Width<p>{isWidth.value}</p></div>
    }
    if (isComfort) {
      comfort = <div id='measurement-bar'>Comfort<p>{isComfort.value}</p></div>
    }
    if (isQuality) {
      quality = <div id='measurement-bar'>Quality<p>{isQuality.value}</p></div>
    }
    if (isLength) {
      length = <div id='measurement-bar'>Length<p>{isLength.value}</p></div>
    }
    if (isFit) {
      fit = <div id='measurement-bar'>Fit<p>{isFit.value}</p></div>
    }


    return (
      <div id='score-summary'>
        <p id='average-score'>{score.toFixed(2)}</p>
        <p id='recommendations'>{trueCount.toFixed(0)}% of reviews recommend this product</p>
        <div id='star-counts'>
          <p><span id='summary-score-list'>5 stars </span>
          <span id='score-count'>{this.state.scoreCounts[5]}</span></p>
          <p><span id='summary-score-list'>4 stars </span>
          <span id='score-count'>{this.state.scoreCounts[4]}</span></p>
          <p><span id='summary-score-list'>3 stars </span>
          <span id='score-count'>{this.state.scoreCounts[3]}</span></p>
          <p><span id='summary-score-list'>2 stars </span>
          <span id='score-count'>{this.state.scoreCounts[2] || 0}</span></p>
          <p><span id='summary-score-list'>1 stars </span>
          <span id='score-count'>{this.state.scoreCounts[1] || 0}</span></p>
        </div>
        <div id ='measurements'>
          <div>{size}</div>
          <div>{width}</div>
          <div>{comfort}</div>
          <div>{quality}</div>
          <div>{length}</div>
          <div>{fit}</div>
        </div>
      </div>
    )
  }
}

export default ReviewSummary;
