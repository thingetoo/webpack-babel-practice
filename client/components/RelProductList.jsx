import React from 'react';
<<<<<<< HEAD

const RelProductList = function (props) {

  return (
    <div>

    </div>
  )
=======
import RelProductCard from './RelProductCard.jsx';

class RelProductList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var arr = [1, 2, 3, 4, 5];
    // console.log(props.productId);
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
>>>>>>> main
}



export default RelProductList;