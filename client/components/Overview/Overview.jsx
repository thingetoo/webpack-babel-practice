import React from 'react';
import css from './Overview.css'
import Thumbnail from './Thumbnail.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

class Overview extends React.Component{
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      thumbnails: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'],
      thumbnailsShown: [0, 5],
    }
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  onArrowClick() {
    if (this.state.thumbnailsShown[1] !== this.state.thumbnails.length) {
      const diff = this.state.thumbnails.length - this.state.thumbnailsShown[1];
      this.setState({
        thumbnailsShown: [diff, this.state.thumbnailsShown[1] + diff]
      })
    }
  }

  render() {
    const { thumbnails, thumbnailsShown } = this.state;
    return this.props.product ?
    (
      <div>
        <div className='image-container'>
          <div className='image-container__thumbnail-container'>
          {
            this.state.thumbnails.slice(thumbnailsShown[0], thumbnailsShown[1]).map((thumb, idx) => {
              return <Thumbnail thumb={thumb} key={idx} />
            })
          }
          <FontAwesomeIcon onClick={() => this.onArrowClick()} icon={faArrowDown} />
          </div>
        </div>
      </div>
    )
    :
    (
    <div>
      <span>Sorry no products selected</span>
    </div>
    )
  }
}

export default Overview;