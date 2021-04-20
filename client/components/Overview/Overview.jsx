/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
// import css from './Overview.css'
import ImageDisplay from './ImageDisplay.jsx'
import ProductInfo from './ProductInfo.jsx'

import axios from 'axios';

class Overview extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      thumbnails: [],
      thumbnailsShown: [0, 7],
      styles: [],
      currentStyle: 0,
      currentThumbnail: 0,
      product: []
    }
    this.onArrowDownClick = this.onArrowDownClick.bind(this);
    this.onArrowUpClick = this.onArrowUpClick.bind(this);
    this.fetchThumbnails = this.fetchThumbnails.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.onArrowLeftClick = this.onArrowLeftClick.bind(this);
    this.onArrowRightClick = this.onArrowRightClick.bind(this);
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

  onArrowLeftClick() {
    const { currentThumbnail } = this.state;
    const prevThumbnail = currentThumbnail - 1;
    if (currentThumbnail > 0) {
      this.setState({
        currentThumbnail: prevThumbnail
      })
    }
  }

  onArrowRightClick() {
    const { currentThumbnail, thumbnails } = this.state;
    const nextThumbnail = currentThumbnail + 1;
    if (currentThumbnail < thumbnails.length - 1) {
      this.setState({
        currentThumbnail: nextThumbnail
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
          thumbnails: response.data.results[this.state.currentStyle].photos,
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
    const { product } = this.props
    const { handleThumbnailClick, onArrowDownClick, onArrowLeftClick, onArrowRightClick, onArrowUpClick } = this;
    const overviewProps = { thumbnails, thumbnailsShown, styles, currentStyle, currentThumbnail, handleThumbnailClick, onArrowDownClick, onArrowLeftClick, onArrowRightClick, onArrowUpClick, product }
    return product ?
    (
      <div className='overview-container'>
        <ImageDisplay {...overviewProps} />
        <ProductInfo product={product} styles={styles} currentStyle={currentStyle}/>
        <div className='description-container'>
          <p>{product.slogan}</p>
          <p>{product.description}</p>
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