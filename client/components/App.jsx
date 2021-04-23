import React from 'react';
import axios from 'axios';

import QA from './QA/QA.jsx'
import Review from './Review.jsx'
//
import Overview from './Overview/Overview.jsx';
import RelProductList from './RelatedProdList/RelProductList.jsx';
import Comparison_Model from './RelatedProdList/Comparison_Model.jsx';
import css from './App_Style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: [],
      comparisonToggle: false
    }
    this.productStateChange = this.productStateChange.bind(this);
    this.comparisonToggle = this.comparisonToggle.bind(this);
  }

  productStateChange(data) {
    this.setState({
      currentProduct: data[0]
    })
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        this.productStateChange(response.data)
      });
  }

  comparisonToggle(relatedProduct) {
    // console.log(this.state.currentProduct);
    var status = !this.state.comparisonToggle ? <Comparison_Model toggleComparison={this.comparisonToggle} displayedProduct={this.state.currentProduct} relatedProduct={relatedProduct} /> : false;

    this.setState({
      comparisonToggle: status
    })
  }

  render() {
    var comparison = this.state.comparisonToggle ? this.state.comparisonToggle : <div></div>;
    return (
      <main>
        {comparison}
        <div className="product-page-viewer">
          <section aria-label="overview">
            <Overview id='overview' product={this.state.currentProduct} />
          </section>
          <section aria-label="related-products" id="lists">
            <RelProductList id="related-products" productId={this.state.currentProduct.id} toggleComparison={this.comparisonToggle} changePage={this.productStateChange} />
          </section>
          <section aria-label="questions and ratings">
            <QA productId={this.state.currentProduct.id} name={this.state.currentProduct.name} />
            <Review item={this.state.currentProduct.id} />
          </section>
        </div>
      </main>
    )
  }
}

export default App;