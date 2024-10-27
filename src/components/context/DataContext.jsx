import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [cart, setCart] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
      console.error('Error fetching data:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

   // Function to remove a product from the cart
   const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
   };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <DataContext.Provider value={{ myData, isError, cart, addToCart,removeFromCart  }}>
      {children}
    </DataContext.Provider>
  );
};