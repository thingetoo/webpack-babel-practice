import React from 'react';

var Comparison_Model = (props) => {
  console.log(props);

  return (
    <div className="comparison-viewer" onClick={(e) => {
      props.toggleComparison();
    }}>
      <h4>Comparison Model</h4>
      <table className="comparison-table">

      </table>
    </div>
  )
}

export default Comparison_Model;