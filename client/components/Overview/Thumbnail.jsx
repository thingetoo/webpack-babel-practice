import React from 'react';
import css from './Overview.css'

const Thumbnail = (props) => {

  return(
    <div className='image-container__thumbnail'>{props.thumb}</div>
  )
}

export default Thumbnail;