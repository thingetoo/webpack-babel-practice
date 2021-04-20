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
    console.log('ID', id);
    axios.get(`/product/${id}/styles`)
      .then((response) => {
        console.log(response.data);
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
    // console.log(prevProps);
    // // this.handleUpdate(this.props.product.id);
    // if (prevProps !== this.props) {
    // }
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
    console.log(this.state.currentStyle);
    var { name, category, default_price } = this.props.product;

    var saleElement = <p className='related-card-info-default-sale'>{this.state.currentStyle.sale_price}</p>
    var defPriceElement = <p className='related-card-info-default-price'>{default_price}</p>
    var price = !this.state.currentStyle.sale_price ? defPriceElement : saleElement;
    var thumb = this.state.thumbnailImg ? <img src={this.state.thumbnailImg} alt={this.state.currentStyle.name} className='related-card-visual-thumbnail' /> : <img className='related-card-visual-thumbnail' alt='image is not found' />;

    return (
      <div className='related-card'>
        <div className='related-card-visual' onClick={(e) => {

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