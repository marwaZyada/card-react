import React, { useContext } from 'react'
import {ProductContext} from '../../components/context/ProductProvider'

function Categories() {
    const categoriesContext=useContext(ProductContext)
  return (
    <div className='py-5'>{categoriesContext.categories.map((el,index)=>(

    <button className='btn btn-primary ms-2 mb-2' onClick={()=>categoriesContext.showCategory(el)} key={index}>{el}</button>

    ))}</div>
  )
}

export default Categories