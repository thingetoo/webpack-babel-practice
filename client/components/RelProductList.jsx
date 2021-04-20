import React from 'react';
import axios from 'axios';
import RelProductCard from './RelProductCard.jsx';

class RelProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rel_products: []
    }
  }

  handleUpdate(id) {
    axios.get(`/products/${id}/related`)
      .then((response) => {
        this.setState({
          rel_products: response.data
        })
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.productId !== prevProps.productId) {
      this.handleUpdate(this.props.productId);
    }
  }
  componentDidMount() {

  }
  render() {
    var arr = [1, 2, 3, 4, 5];
    // console.log(props.productId);
    return (
      <div>
        <h2>Related Products</h2>
        {
          // this.state.rel_products.map(() => {
          //   return <RelProductCard />;
          // })
        }
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