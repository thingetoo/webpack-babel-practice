import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import ReviewSummary from './ReviewSummary.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      count: null
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.item !== prevProps.item) {
      this.setState({productId: prevProps.item});
      this.fetchReviews();
    }
  }

  fetchReviews () {
    axios.get(`/reviews/${this.props.item}/relevant/1000`)
      .then((response) => {
        this.setState({
          reviews: response.data.results,
          count: response.data.results.length
        })
      });

  }

  render() {
    return (
      <div className='review'>
        <ReviewSummary data={this.props.item} getScore={this.props.getScore}/>
        <div id='review-line-two'>
          <ReviewsList data={this.state.reviews} count={this.state.count} product={this.props.item}/>
        </div>
      </div>
    )
  }
}

export default Review;