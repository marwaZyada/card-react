import React from "react";
import ProductProvider from "./components/context/ProductProvider";
import { Route,Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import  Card  from "./components/Card/Card.jsx";
import Home from './components/Home/Home.jsx'
import ProductDetails from "./components/ProductDetails/ProductDetails";



function App() {
  return (
    <ProductProvider>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails/>}/>
      
     </Routes>
    </ProductProvider>
  );
}

export default App;
