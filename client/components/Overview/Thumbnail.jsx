/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line no-unused-vars
// import css from './Overview.css'

const Thumbnail = ({ thumbnailClick, thumbnailIndex, thumb, currentThumbnail, product }) => {
  return(
    <img
    onClick={() => thumbnailClick(thumbnailIndex)}
    style={
      thumbnailIndex === currentThumbnail ?
      {border: '2px solid', boxSizing: 'border-box', borderColor: '#de5499'} :
      {}
    } src={thumb.thumbnail_url}
    alt={product.name}
    className='image-container__thumbnail' />

  )
}

export default Thumbnail;