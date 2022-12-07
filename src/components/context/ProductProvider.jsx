import axios from "axios";
import React,{ createContext , useEffect, useState} from "react";


export const ProductContext=createContext();


function ProductProvider(props) {
  const [product,setProduct]=useState([]);
  const [categories,setCategories]=useState([]);
  const [cart,setCart]=useState([]);


const produtApi='https://dummyjson.com/products'
  const getProduct=async()=>{
await axios.get(produtApi).then(res=>{
  console.log(res.data.products);
  setProduct(res.data.products);
})}


  const getCategories=async()=>{
await axios.get(`${produtApi}/categories`).then(res=>{
  console.log(res.data);
  setCategories(res.data);
})}

  const showCategory=async(categorys)=>{
await axios.get(`${produtApi}/category/${categorys}`).then(res=>{

  console.log(res.data.products);
  setProduct(res.data.products);
})}


const addCart=(product)=>{
const cartProduct=cart.find(el=>el.id===product.id);

if(cartProduct){
  product.qnt++
}
else{
  product.qnt=1
  setCart([...cart,product]);
}

console.log(cart)
}

const increase=(productCart)=>{
  
productCart.qnt++

setCart([...cart])

}
const decrease=(productCart)=>{
if(productCart.qnt>0){  
productCart.qnt--
setCart([...cart])
}
if(productCart.qnt===0){
 const newCart=cart.filter(el=>el.id!==productCart.id)
  setCart(newCart)
}
}

const deleteProduct=(productCart)=>{
  const newCart=cart.filter(el=>el.id!==productCart.id)
  setCart(newCart)
}

useEffect(()=>{
  getProduct();
  getCategories();
},[])
  
  return (
    <ProductContext.Provider value={{product,categories,showCategory,addCart,cart,increase,decrease,deleteProduct}}>
     {props.children}

    </ProductContext.Provider>
  )
}

export default ProductProvider