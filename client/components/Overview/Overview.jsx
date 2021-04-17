import React from 'react';
import css from './Overview.css'
import Thumbnail from './Thumbnail.jsx'

class Overview extends React.Component{
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      thumbnails: ['img1', 'img2', 'img3', 'img4', 'img5']
    }
  }

  render() {
    return this.props.product ?
    (
      <div>
        <div className='image-container'>
          <div className='image-container__thumbnail-container'>
          {
            this.state.thumbnails.map((thumb, idx) => {
              return <div className='image-container__thumbnail' ><Thumbnail thumb={thumb} key={idx} /></div>
            })
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