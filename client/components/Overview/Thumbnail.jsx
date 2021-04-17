import React from 'react';
import css from './Overview.css'

const Thumbnail = (props) => {
  return(
    <img
    onClick={() => props.thumbnailClick(props.thumbnailIndex)}
    style={
      props.thumbnailIndex === props.currentThumbnail ?
      {borderBottom: '4px solid rgba(0, 0, 0, 0.7)', boxSizing: 'border-box'} :
      {}
    } src={props.thumb.thumbnail_url}
    className='image-container__thumbnail' />

  )
}

export default Thumbnail;