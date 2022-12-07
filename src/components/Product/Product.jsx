import React, { useContext }  from 'react'
import { Col} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {ProductContext} from '../../components/context/ProductProvider'

function Product({productElement}) {
  const cartContext=useContext(ProductContext)
  return (
  
<Col lg={3} key={productElement.id} className=" mb-3  " >
  <div className='border text-center  p-2'>
  
  <img src={productElement.thumbnail} alt="" className='w-100' height='250'/>

  
  <h2 className='fs-5 mt-2'  title={productElement.title}>{productElement.title}</h2>
<p>{productElement.price}$</p>
<NavLink to={`/productDetails/${productElement.id}`}>
 <button className='btn btn-primary'>Details</button>
 </NavLink>
 <button className='btn btn-primary text-capitalize 'onClick={()=>cartContext.addCart(productElement)}>add to cart</button>
  </div>
</Col>
    
  )
}

export default Product