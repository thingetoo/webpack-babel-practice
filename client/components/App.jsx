import React from 'react';
import QA from './QA.jsx'
import QuestionBar from './QuestionBar.jsx'
//
import Overview from './Overview/Overview.jsx';
import RelProductList from './RelatedProdList/RelProductList.jsx';

import axios from 'axios';
import Comparison_Model from './RelatedProdList/Comparison_Model.jsx';
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

  comparisonToggle(relatedProduct, relatedStyle) {
    // console.log(this.state.currentProduct);
    console.log(relatedStyle);
    var status = !this.state.comparisonToggle ? <Comparison_Model toggleComparison={this.comparisonToggle} displayedProduct={this.state.currentProduct} relatedProduct={relatedProduct} /> : false;

    this.setState({
      comparisonToggle: status
    })
  }

  render() {
    var comparison = this.state.comparisonToggle ? this.state.comparisonToggle : <div></div>;
    return (
      <div>
        {comparison}
        <div className="product-page-viewer">
          <Overview product={this.state.currentProduct} />
          <RelProductList productId={this.state.currentProduct.id} toggleComparison={this.comparisonToggle} />
          <QA />
          <QuestionBar />
        </div>
      </div>
    )
  }
}

export default App;