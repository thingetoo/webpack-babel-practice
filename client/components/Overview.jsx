import React from 'react';
import css from './Overview.css'

class Overview extends React.Component{
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      thumbnails: ['img1', 'img2', 'img3', 'img4', 'img5']
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return this.props.product ?
    (
      <div>
        <div className='image-container'>
          <div className='image-container__thumbnail-container'>
          {
            this.state.thumbnails.map((thumb, idx) => {
              return <div onClick={() => this.handleClick()} className='image-container__thumbnail' key={idx}>{thumb}</div>
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