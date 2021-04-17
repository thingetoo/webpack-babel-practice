import React from 'react';
import css from './Overview.css'

const Thumbnail = (props) => {

  return(
    <img onClick={() => props.thumbnailClick(props.index)} src={props.thumb.thumbnail_url} className='image-container__thumbnail' />
  )
}

export default Thumbnail;