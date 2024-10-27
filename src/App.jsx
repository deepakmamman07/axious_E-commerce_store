// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./components/context/DataContext";
import ProductList from "./components/productList"; // Assuming correct component name
import ProductView from "./components/productView"; // Assuming correct component name
import Cart from "./components/Cart";
import NavPage from "./components/navPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <DataProvider>
          <NavPage />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/ProductView/:id" element={<ProductView />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </DataProvider>
    </Router>
  );
}
// 
export default App;
