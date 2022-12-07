import React ,{ useContext }from 'react'
import { Container, Row } from 'react-bootstrap'
import Product from '../Product/Product'
import {ProductContext} from '../../components/context/ProductProvider'
function ListProducts() {
  const procontext=useContext(ProductContext)
  return (
    <Container >
   <Row className='py-5 justify-content-space-between '>
   {procontext.product.map(productel=>(
        <Product key={productel.id} productElement={productel}/>
   ))}
    </Row>
    </Container>
 
  )
}

export default ListProducts