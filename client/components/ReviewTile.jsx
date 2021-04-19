import React from 'react';
import requests from '../../axios-prefilter'
import axios from 'axios';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props)
  }


  getTwoReviews () {
    axios.get(requests.reviews.product_id[19090])
      .then(response => console.log(response.data));
  }

  render() {

    return (
      <div>
        <h4>reviews, sorted by</h4>
      </div>
    )
  }
}

export default ReviewTile;