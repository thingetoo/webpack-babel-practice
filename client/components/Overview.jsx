import React from 'react';
import css from './Overview.css'

class Overview extends React.Component{
  constructor(props) {
    super(props)

    console.log(props)
    this.state = {
      thumbnails: ['item1', 'item2', 'item3', 'item4', 'item5']
    }
  }

  render() {
    return this.props.product ?
    (
      <div>
        <div className='image-container'>
          {
            this.state.thumbnails.map((thumb, idx) => {
              return <div className='image-container__thumbnail' key={idx}>thumb</div>
            })
          }
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