import React from 'react';
import axios from 'axios';

class RelProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleList: [],
      currentStyle: {}
    }
  }
  // var defaultStyle =
  handleUpdate(id) {
    axios.get(`/product/${id}/styles`)
      .then((response) => {
        this.setState({
          styleList: response.data,
          currentStyle: response.data.results[0],
          thumbnailImg: response.data.results[0].photos[0].url
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps) {

  }

  componentDidMount() {
    axios.get(`/product/${this.props.product.id}/styles`)
      .then((response) => {

        this.setState({
          styleList: response.data.results,
          currentStyle: response.data.results[0],
          thumbnailImg: response.data.results[0].photos[0].url
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    var { name, category, default_price } = this.props.product;
    var { sale_price } = this.state.currentStyle;

    // price display
    default_price = '$' + default_price.split('.').slice(0, 1).join('');
    if (sale_price) {
      sale_price = '$' + sale_price.split('.').slice(0, 1).join('')
    }

    var saleElement = <p className='related-card-info-default-sale'>{this.state.currentStyle.sale_price}</p>
    var defPriceElement = <p className='related-card-info-default-price'>{default_price}</p>

    // Display conditions
    var price = !this.state.currentStyle.sale_price ? defPriceElement : saleElement;
    var thumb = this.state.thumbnailImg ? <img src={this.state.thumbnailImg} alt={this.state.currentStyle.name} className='related-card-visual-thumbnail' /> : <img className='related-card-visual-thumbnail' src={`https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081`} alt='image is not found' />;

    return (
      <div className='card hvr-float'>
        <div className='related-card-visual' onClick={(e) => {
          this.props.toggleComparison(this.props.product, this.state.currentStyle);
        }}>
          <img className='related-card-visual-star-default' src="https://img.icons8.com/windows/32/000000/star--v1.png" />
          {thumb}
        </div>
        <div className='related-card-info'>
          <h4 className='related-card-info-category'>{category}</h4>
          <h3 className='related-card-info-name'>{name}</h3>
          {price}
          <img />
        </div>
      </div>
    )
  }
}

export default RelProductCard;