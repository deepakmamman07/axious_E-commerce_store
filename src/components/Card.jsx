import React from 'react'
import { Link } from "react-router-dom";
import { useData } from "./context/DataContext";
import "../components/productList.css";


const Card = () => {
    const { myData, isError } = useData();

  return (
    <div className="container">
    {/* <h1 className="axios">axios</h1> */}
    {isError !== "" && <h2>{isError}</h2>}
    <div className="grid">
      {myData.map((product) => {
        const { id, image, title, description, price, rating } = product;
        return (
          <div className="card" key={id}>
            <img className="product_Images" src={image} alt={title} />
            <h4>{title.slice(0, 25)}</h4>
            <span className="list_description" >{description.slice(0, 70)}</span><br />
            <span className="price">Price: ${price}</span>
            {rating && (
              <div className="rating">
                <span>Rating: {rating.rate}</span>
                <span>Count: {rating.count}</span>
              </div>
            )}
            <Link to={`/productView/${id}`}>
            <button className="buy_Button">Buy</button>
            </Link>
          </div>
        );
      })}
    </div>
  </div>
    
  )
}

export default Card