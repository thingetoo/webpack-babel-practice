import React from 'react';
import ReviewTile from './ReviewTile.jsx'

class Review extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div>
        <h2>Ratings {'&'} Review</h2>
        <ReviewTile/>
      </div>
    )
  }
}

export default Review;