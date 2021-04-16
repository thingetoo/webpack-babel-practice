import React from 'react';
import RelProductCard from './RelProductCard.jsx';

const RelProductList = function (props) {
  var arr = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2>Related Products</h2>
      {
        arr.map(() => {
          return <RelProductCard />;
        })
      }
      <h2>My Outfits</h2>
      {
        arr.map(() => {
          return <RelProductCard />;
        })
      }
    </div>
  )
}



export default RelProductList;