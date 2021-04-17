import React from 'react';
import css from './Overview.css'
import Thumbnail from './Thumbnail.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

class Overview extends React.Component{
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      thumbnails: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'],
      thumbnailsShown: [0, 5],
    }
    this.onArrowDownClick = this.onArrowDownClick.bind(this);
    this.onArrowUpClick = this.onArrowUpClick.bind(this);
  }


  onArrowDownClick() {
    if (this.state.thumbnailsShown[1] < this.state.thumbnails.length) {
      const diff = this.state.thumbnails.length - this.state.thumbnailsShown[1];
      this.setState({
        thumbnailsShown: [diff, this.state.thumbnailsShown[1] + diff]
      })
    }
  }

  onArrowUpClick() {
    const diff = this.state.thumbnails.length - this.state.thumbnailsShown[0];
    console.log('clicked');
    if (this.state.thumbnailsShown[0] > 0) {
      this.setState({
        thumbnailsShown: [0, diff]
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
          thumbnailsShown[0] > 0 ?
            <FontAwesomeIcon className='image-container__arrow' onClick={() => this.onArrowUpClick()} icon={faArrowUp} /> :
            <div></div>
            }
          {
            this.state.thumbnails.slice(thumbnailsShown[0], thumbnailsShown[1]).map((thumb, idx) => {
              return <Thumbnail thumb={thumb} key={idx} />
            })
          }
          {
            thumbnailsShown[1] !== thumbnails.length ?
            <FontAwesomeIcon className='image-container__arrow' onClick={() => this.onArrowDownClick()} icon={faArrowDown} /> :
            <div></div>
          }
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