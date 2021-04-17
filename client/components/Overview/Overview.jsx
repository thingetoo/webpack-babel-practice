import React from 'react';
import css from './Overview.css'
import Thumbnail from './Thumbnail.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class Overview extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      thumbnails: [],
      thumbnailsShown: [0, 7],
      styles: [],
      currentStyle: 0,
      currentThumbnail: 0
    }
    this.onArrowDownClick = this.onArrowDownClick.bind(this);
    this.onArrowUpClick = this.onArrowUpClick.bind(this);
    this.fetchThumbnails = this.fetchThumbnails.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
  }

// Arrow function account for only 14 icons - will need to adjust the logic for more item
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
    if (this.state.thumbnailsShown[0] > 0) {
      this.setState({
        thumbnailsShown: [0, diff]
      })
    }
  }

  handleThumbnailClick(id) {
    this.setState({
      currentThumbnail: id
    })
  }

  fetchThumbnails() {
      axios.get(`/product/${this.props.product.id}/styles`)
        .then(response => {
          this.setState({
            styles: response.data.results,
            thumbnails: response.data.results[this.state.currentStyle].photos
          })
        })
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      this.fetchThumbnails();
    }
  }

  render() {

    const { thumbnails, thumbnailsShown, styles, currentStyle, currentThumbnail } = this.state;
    return this.props.product ?
    (
      <div>
        <div className='image-container'>
        {
          styles[currentStyle] ?
          <img className='image-container__main-image' src={styles[currentStyle].photos[currentThumbnail].thumbnail_url} />
          :
          <img src='https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'
          />
        }
          <div className='image-container__thumbnail-container'>
            {
          thumbnailsShown[0] > 0 ?
            <FontAwesomeIcon className='image-container__arrow' onClick={() => this.onArrowUpClick()} icon={faArrowUp} /> :
            <div></div>
            }
          {
            this.state.thumbnails.slice(thumbnailsShown[0], thumbnailsShown[1]).map((thumb, idx) => {
              return <Thumbnail thumbnailIndex={idx} currentThumbnail={this.state.currentThumbnail} thumbnailClick={this.handleThumbnailClick} thumb={thumb} key={idx} />
            })
          }
          {
            thumbnailsShown[1] < thumbnails.length ?
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