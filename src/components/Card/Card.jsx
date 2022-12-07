import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import {ProductContext} from '../../components/context/ProductProvider'
import Table from 'react-bootstrap/Table';

function Card() {
  const {cart,increase,decrease,deleteProduct}=useContext(ProductContext);
  return (
    
    <Container>

    <Table striped bordered hover className='text-center'>
   
<thead>
<tr>
<th>#</th>
    <th>Title</th>
    <th>price</th>
    <th>Image</th>
    <th>Quantity</th>
    <th>Increase</th>
    <th>Decrease</th>
    <th>Delete</th>
</tr>
</thead>

<tbody>
{cart.map((el,index)=>(
  <tr key={el.id}>

    <th>{index+1}</th>
    <th>{el.title}</th>
    <th>{el.price}</th>
    <th><img src={el.thumbnail} alt="" className='w-50' height='75'/>
</th>
    
    <th>{el.qnt}</th>
    <th><button className='btn btn-primary' onClick={()=>increase(el)}>+</button></th>
    <th><button className='btn btn-primary' onClick={()=>decrease(el)}>-</button></th>
    <th><button className='btn btn-primary'onClick={()=>deleteProduct(el)}>Delete</button></th>
  </tr>

))} 
    
</tbody>
</Table>



    </Container>
   
  )
}

export default Card