import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyOutfitCard = (props) => {
  var { name, category, default_price, id } = props.product;
  var price = '$' + default_price.split('.').slice(0, 1).join('');
  console.log(props.product);
  const [outfitList, loadOutfit] = useState([]);
  useEffect(() => {
    axios.get(`/product/${id}/styles`)
      .then((response) => {
        handleOutfit(response.data);
      })
  }, [])

  var handleOutfit = (data) => {
    loadOutfit(data);
  }
  if (outfitList.length !== 0) {
    var default_url = outfitList.results[0].photos[0].thumbnail_url;
    console.log(outfitList.results[0]);
  } else {
    var default_url = undefined;
  }

  var thumb = <img src={default_url} className='related-card-visual-thumbnail' /> || <img alt="Image not found" className='related-card-visual-thumbnail' />
  console.log(outfitList);

  return (
    <div className='card hvr-float'>
      <div className='related-card-visual'>
        {/* <img className='related-card-visual-star-default' src="https://img.icons8.com/windows/32/000000/star--v1.png" /> */}
        {thumb}
      </div>
      <div className='related-card-info'>
        <h4 className='related-card-info-category'>{category}</h4>
        <h3 className='related-card-info-name'>{name}</h3>
        {price}
        <img />
      </div>
    </div>
  )
}

export default MyOutfitCard;