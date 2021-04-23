import React from 'react';
import axios from 'axios';
import ReviewTiles from './ReviewTiles.jsx';
import Review from './Review.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      sort: 'relevant',
      count: null
    }
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data[0] !== prevProps.data[0]) {
      this.setState({
        reviews: this.props.data,
        count: this.props.data.count
      })
    }
  }

  onChange (e) {
    this.setState ({
      sort: e.target.value
    })
  }


  render() {
    return (
      <div class='review-list'> {this.props.data.count} reviews, sort by
        <select onChange={this.onChange} class='drop-down'>
          <option value='relevant'>relevance</option>
          <option value='helpful'>helpfulness</option>
          <option value='newest'>new to old</option>
        </select>
        <ReviewTiles data={[this.state.sort, this.props.data]}/>
      </div>
    )
  }
}


export default ReviewsList;