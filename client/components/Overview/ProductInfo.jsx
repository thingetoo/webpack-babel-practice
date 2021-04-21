/* eslint-disable react/prop-types */
import React from 'react';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      size: '',
      totalQuantity: '',
      selectedQuantity: 0
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.styles !== this.props.styles) {
      console.log(this.props.styles[this.props.currentStyle].skus, this.state.size)
      this.setState({
        quantity: this.props.styles[this.props.currentStyle].skus.quantity,
      })
    }
  }

  handleSizeChange(e) {
    const { styles, currentStyle } = this.props;
    const cur = Object.entries(styles[currentStyle].skus).filter(([, entry]) => {
       return entry.size === e.target.value
     })
    this.setState({
      size: e.target.value,
      totalQuantity: cur[0][1].quantity,
      selectedQuantity: 1
    })
  }

  handleQuantityChange(e) {
    this.setState({
      selectedQuantity: e.target.value
    })
  }

  render() {
    const { product, styles, currentStyle, handleStyleClick } = this.props;
    const { name, default_price, category } = this.props.product
    return product ?
    (
      <div className='product-information'>
        <h5>Read all [#] reviews</h5>
        <h5>{category}</h5>
        <h3>{name}</h3>
        <p>{default_price}</p>
        <h5>STYLE &gt; SELECTED STYLE</h5>
        <div className='styles-container'>
          {
            styles.map((style, idx) => {
              return <img className='styles__photo hvr-glow' onClick={() => handleStyleClick(idx)} key={style.style_id} src={style.photos[0].thumbnail_url}></img>
              // <img className='styles__photo' key={style.style_id} alt={style.name} src={style.photos[0].thumbnail_url} />
            })
          }
        </div>
        <div className='checkout-buttons'>
        <form onSubmit={this.handleSubmit}>
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
                this.state.totalQuantity && [...Array(this.state.totalQuantity)].map((el, idx) => {
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