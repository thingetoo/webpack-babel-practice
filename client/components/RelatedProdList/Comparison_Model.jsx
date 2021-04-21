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
          <thead>
            <tr>
              <th colSpan="1">comparison</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{displayInfo.name}</td>
              <td>Features</td>
              <td>{props.relatedProduct.name}</td>
            </tr>
            <tr>
              <td>{'$' + displayInfo.default_price.split('.').slice(0, 1).join('')}</td>
              <td>Price</td>
              <td>{'$' + props.relatedProduct.default_price.split('.').slice(0, 1).join('')}</td>
            </tr>
            <tr>
              <td>{displayInfo.category}</td>
              <td>Category</td>
              <td>{props.relatedProduct.category}</td>
            </tr>
            <tr>
              <td>{displayInfo.features[0].value}</td>
              <td>Fabric</td>
              <td>{props.relatedProduct.features[0].value}</td>
            </tr>
            <tr>
              <td>{displayInfo.features[0].value}</td>
              <td>Cut</td>
              <td>{props.relatedProduct.features[1].value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };
  return null;
}

export default Comparison_Model;