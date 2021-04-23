import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import RelProductCard from './RelProductCard.jsx';
import css from './Related_Outfit.css';

class RelProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rel_products: [],
      outfit_products: []
    }
  }

  arrowHandler(direction, e) {
    var view = $(".related-list");
    var move = "300px";
    var sliderLimit = parseInt($('.related-list-content').css('width'));
    // var sliderLimit = -500;
    sliderLimit -= sliderLimit * 2;

    var currentPosition = parseInt(view.css("left"));
    if (direction === 'right') {
      if (currentPosition >= 0) {
        $('.related-list-arrows__right').animate({ border: 'solid 2px red' }, { duration: 400 });
        view.stop(false, true).animate({ left: "-=" + move }, { duration: 400 });
      }
    } else {
      if (currentPosition < 0) {
        $('.related-list-arrows__left').animate({ border: 'solid 2px red' }, { duration: 400 });
        view.stop(false, true).animate({ left: "+=" + move }, { duration: 400 });
      }
    }
  }

  handleRelatedProductUpdates(id) {
    axios.get(`/products/${id}/related`)
      .then((response) => {
        this.setState({
          rel_products: response.data
        })
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.handleRelatedProductUpdates(this.props.productId);
    }
  }
  componentDidMount() {

  }
  render() {

    // console.log(props.productId);
    return (
      <div>
        <div className='related-view'>
          <h2>Related Products</h2>
          <img className='related-list-arrows related-list-arrows__left hvr-backward' src="https://img.icons8.com/pastel-glyph/64/000000/forward.png" onClick={(e) => {
            this.arrowHandler('left', e);
          }} />
          <div className='related-list'>
            <div className='related-list-content'>
              {
                this.state.rel_products.map((product, i) => {
                  return <RelProductCard key={i} product={product} toggleComparison={this.props.toggleComparison} />;
                })
              }
            </div>
          </div>
          <img className='related-list-arrows related-list-arrows__right hvr-forward' src="https://img.icons8.com/pastel-glyph/64/000000/forward.png" onClick={(e) => {
            this.arrowHandler('right', e);
          }} />
        </div>
        <h2>My Outfits</h2>
        {
          // arr.map(() => {
          //   return <RelProductCard />;
          // })
        }
      </div>
    )
  }
}



export default RelProductList;