// NavPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/NavPage.css";
import logo from '../assets/logo/logo.png';
import { useData } from "./context/DataContext";

const NavPage = () => {
  const { myData } = useData();
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Filter data based on search input
  const filteredData = myData.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="nav">
      <img className="logo_Img" src={logo} alt="Logo" />
      <ul className="nav_elem">
        <li>
          <Link to="/productList">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={inputValue}
          onChange={handleChange}
        />
        <button>Search</button>
      </div>
      <div className="filter">
        <select>
          <option value="">Filter by...</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="category">Category</option>
        </select>
      </div>
      {/* Display only if there's a search term */}
      {inputValue && (
       <div className="search_item_container">
         <ul className="search-results">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div className="card" key={item.id}>
                <img className="product_Images" src={item.image} alt={item.title} />
                <h4>{item.title.slice(0, 25)}</h4>
                <span className="list_description">{item.description.slice(0, 70)}</span><br />
                <span className="price">Price: ${item.price}</span>
                {item.rating && (
                  <div className="rating">
                    <span>Rating: {item.rating.rate}</span>
                    <span>Count: {item.rating.count}</span>
                  </div>
                )}
                <Link to={`/productView/${item.id}`}>
                  <button className="buy_Button">Buy</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
       </div>
      )}
    </div>
  );
};

export default NavPage;
