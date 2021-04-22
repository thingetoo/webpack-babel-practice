import React, { useState, useEffect } from 'react';
import axios from 'axios';

var Comparison_Model = (props) => {
  var currentInfo;
  const [displayInfo, changeDisplay] = useState({});

  // var handleChange = (data) => {
  //   changeDisplay(data);
  // }
  useEffect(() => {
    axios.get(`http://localhost:3000/products/:${props.displayedProduct.id}/info`)
      .then((response) => {
        // return function cleanup() {
        console.log(changeDisplay);
        // }


        // handleChange(response.data);
        fetchproduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  var fetchproduct = (data) => {
    changeDisplay(data);
    return function () {
    }
  }

  console.log(Object.keys(displayInfo).length);
  if (Object.keys(displayInfo).length) {
    return (
      <div className="comparison-viewer" onClick={(e) => {
        props.toggleComparison();
      }}>
        <table className="comparison-table">
          <tbody>
            <tr className="comparison-table-title">
              <td>COMPARING</td>
              <td></td>
              <td></td>
            </tr>
            <tr className="comparison-table-names">
              <td className="comparison-table-display-product">{displayInfo.name}</td>
              <td></td>
              <td className="comparison-table-related-product">{props.relatedProduct.name}</td>
            </tr>
            <tr className="comparison-table-info">
              <td className="comparison-table-display-product">{'$' + displayInfo.default_price.split('.').slice(0, 1).join('')}</td>
              <td className="comparison-table-feature">Price</td>
              <td className="comparison-table-related-product">{'$' + props.relatedProduct.default_price.split('.').slice(0, 1).join('')}</td>
            </tr>
            <tr className="comparison-table-info">
              <td className="comparison-table-display-product">{displayInfo.category}</td>
              <td className="comparison-table-feature">Category</td>
              <td className="comparison-table-related-product">{props.relatedProduct.category}</td>
            </tr>
            <tr className="comparison-table-info">
              <td className="comparison-table-display-product">{displayInfo.features[0].value}</td>
              <td className="comparison-table-feature">Fabric</td>
              <td className="comparison-table-related-product">{props.relatedProduct.features[0].value}</td>
            </tr>
            <tr className="comparison-table-info">
              <td className="comparison-table-display-product">{displayInfo.features[0].value}</td>
              <td className="comparison-table-feature">Cut</td>
              <td className="comparison-table-related-product">{props.relatedProduct.features[1].value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };
  return null;
}

export default Comparison_Model;