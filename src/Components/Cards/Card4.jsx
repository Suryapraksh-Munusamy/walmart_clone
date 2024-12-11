import React from 'react'

const Card4 = ({ item }) => {
  const {id,title,price,image,rating,numReviews} = item;
  return (
    <div className="cards">
    <div className="image_box">
        <img src={image} alt="" />
    </div>
    <div className="detailes">
        <p>{title}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{numReviews}</p>
        <button>Add to Cart</button>
    </div>
</div>
  )
}

export default Card4