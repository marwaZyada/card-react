import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
      const {id}=useParams();
const [product,setProduct]=useState({})
useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then(res=>{
setProduct(res.data)
 } )
})
  return (
    <div>{product.title}</div>
  )
}

export default ProductDetails