import React from 'react';
import QA from './QA.jsx'
import QuestionBar from './QuestionBar.jsx'
import Overview from './Overview/Overview.jsx';
import RelProductList from './RelatedProdList/RelProductList.jsx';
import Navbar from './Navbar/Navbar.jsx'
// eslint-disable-next-line no-unused-vars
import css from './App.css'

import axios from 'axios';
import Comparison_Model from './RelatedProdList/Comparison_Model.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: [],
      comparisonToggle: false,
      cart: [],
      numItemsInCart: 0
    }
    this.productStateChange = this.productStateChange.bind(this);
    this.comparisonToggle = this.comparisonToggle.bind(this);
    this.fetchCart = this.fetchCart.bind(this);
  }


  productStateChange(data) {
    this.setState({
      currentProduct: data[0]
    })
    this.fetchCart()
  }

  componentDidMount() {
    axios.get('/products')
      .then((response) => {
        this.productStateChange(response.data)
      });
    this.fetchCart()
  }

  fetchCart() {
    axios.get('/cart')
      .then((response) => {
        console.log(response.data)
        this.setState({
          cart: response.data,
          numItemsInCart: response.data.length
        })
      })
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
          <section aria-label="navbar">
            <Navbar numItemsInCart={this.state.numItemsInCart} id='navbar' />
          </section>
          <section aria-label="overview">
            <Overview getCart={this.fetchCart} id='overview' product={this.state.currentProduct} />
          </section>
          <section aria-label="related-products">
            <RelProductList id="related-products" productId={this.state.currentProduct.id} toggleComparison={this.comparisonToggle} />
          </section>
          <section aria-label="questions and ratings">
            <QA id='qa' />
            <QuestionBar id="question-bar" />
          </section>
        </div>
      </main>
    )
  }
}

export default App;