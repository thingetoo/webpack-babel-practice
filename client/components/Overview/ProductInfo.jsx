/* eslint-disable react/prop-types */
import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: '',
      totalQuantity: '',
      selectedQuantity: 0,
      currentSku: ''
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentStyle !== this.props.currentStyle) {
      this.setState({
        quantity: this.props.styles[this.props.currentStyle].skus.quantity,
        size: 'Select Size',
        selectedQuantity: '-',
        totalQuantity: 0,
      })

    }
  }

  handleSizeChange(e) {
    const { styles, currentStyle } = this.props;
    let cur;
    if (e.target.value === '') {
      console.log('here')
      cur = Object.entries(styles[currentStyle].skus).filter(([, entry]) => {
        return entry.size === 'XS'
      })
    } else {
      cur = Object.entries(styles[currentStyle].skus).filter(([, entry]) => {
        return entry.size === e.target.value
      })
    }
     console.log('THIS IS CUR', cur)
     const currentSku = cur[0][0];
    this.setState({
      size: e.target.value,
      totalQuantity: cur[0][1].quantity,
      selectedQuantity: 1,
      currentSku: currentSku
    })
  }

  handleQuantityChange(e) {
    this.setState({
      selectedQuantity: e.target.value
    })
  }

  render() {
    const { product, styles, currentStyle, handleStyleClick, handleAddToCart} = this.props;
    const { name, default_price, category } = this.props.product
    const { currentSku, selectedQuantity } = this.state;
    return product && styles[currentStyle] ?
    (
      <div className='product-information'>
        {/* Social Media buttons */}
        <div className='product-information__social-buttons'>
          <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world">
            <i> </i>
             Tweet
          </a>
          <a
          className="facebook-share-button"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
            <i> </i>
             Post
          </a>
          <a
          className="pinterest-share-button"
          href="https://www.pinterest.com/pin/create/button/">
             Pinterest
          </a>
          {/* Product information */}
        </div>
        <h5>Read all [#] reviews</h5>
        <h5>{category}</h5>
        <h3>{name}</h3>
        {/* Conditionally rendering prices based on whether or not there is a sale */}
        <div>
          {
          styles[currentStyle].sale_price ?
          <div id='product-information__prices'>
            <p id='old-price'>{styles[currentStyle].original_price}</p>
            <p>{styles[currentStyle].sale_price}</p>
          </div>
          :
          styles[currentStyle].original_price || default_price
          }
        </div>
        <h5>STYLE &gt; {styles[currentStyle].name || 'Loading...'}</h5>
        {/* Rendering the styles that are available for each product */}
        <div className='styles-container'>
          {
            styles.map((style, idx) => {
              return(
                <div className='styles-container__style' key={style.style_id}>

                  <div className='checkmark'>{
                    currentStyle === idx ? <>&#10003;</> : <></>
                  }</div>
                  <img className='styles__photo hvr-glow' alt={style.name} onClick={() => handleStyleClick(idx)} src={style.photos[0].thumbnail_url}></img>
                  <h6 onClick={() => handleStyleClick(idx)}>{style.name}</h6>
                </div>

              )
              // <img className='styles__photo' key={style.style_id} alt={style.name} src={style.photos[0].thumbnail_url} />
            })
          }
        </div>
        <div className='checkout-buttons'>
        <form onSubmit={(e) => handleAddToCart(e, currentSku, selectedQuantity)}>
          <div className='input-container'>
            <select className='checkout-input hvr-glow' value={this.state.size} onChange={(e) => this.handleSizeChange(e)}>
              <option value=''>Select Size</option>
              {
              styles[currentStyle] && Object.entries(styles[currentStyle].skus).filter(([, entry]) => entry.size !== 0).map(([key, entry]) => {
                return <option key={key} value={entry.size}>{entry.size}</option>
              })
              }
            </select>
            <select className='checkout-input hvr-glow' value={this.state.selectedQuantity} onChange={e => this.handleQuantityChange(e)}>
              <option value=''>-</option>
              {
                this.state.totalQuantity ? [...Array(this.state.totalQuantity - 1)].map((el, idx) => {
                  return <option key={idx}>{idx + 1}</option>
                })
                : <option>No Results</option>
              }
            </select>
            <input className="hvr-back-pulse checkout-input" type="submit" value="Add to Cart" />
          </div>
        </form>
        </div>
      </div>
    )
    :
    (
      <div>loading products</div>
    )
  }
}

export default ProductInfo;