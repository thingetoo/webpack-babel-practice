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
    const cur = Object.entries(styles[currentStyle].skus).filter(([, entry]) => {
       return entry.size === e.target.value
     })
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
    console.log(styles[currentStyle])
    return product && styles[currentStyle] ?
    (
      <div className='product-information'>
        <h5>Read all [#] reviews</h5>
        <h5>{category}</h5>
        <h3>{name}</h3>
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
        <div className='styles-container'>
          {
            styles.map((style, idx) => {
              return(
                <div className='styles-container__style' key={style.style_id}>
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
              styles[currentStyle] && Object.entries(styles[currentStyle].skus).map(([key, entry]) => {
                return <option key={key} value={entry.size}>{entry.size}</option>
              })
              }
            </select>
            <select className='checkout-input hvr-glow' value={this.state.selectedQuantity} onChange={e => this.handleQuantityChange(e)}>
              <option value=''>-</option>
              {
                this.state.totalQuantity && [...Array(this.state.totalQuantity - 1)].map((el, idx) => {
                  return <option key={idx}>{idx + 1}</option>
                })
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