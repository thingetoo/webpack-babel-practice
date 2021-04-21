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



  render() {
    return (
      <main>
        <section aria-label="overview">
          <Overview id='overview' product={this.state.currentProduct} />
        </section>
        <section aria-label="comparison-model">
          <Comparison_Model id='comparison-model' />
        </section>
        <section aria-label="related-products">
          <RelProductList id="related-products" productId={this.state.currentProduct.id} />
        </section>
        <section aria-label="questions and ratings">
          <QA id='qa' />
          <QuestionBar id="question-bar" />
        </section>
      </main>
    )
  }
}

export default App;