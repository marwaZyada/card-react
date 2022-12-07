import React from 'react';
import { Container } from 'react-bootstrap';
import ListProducts from '../../components/listproducts/ListProducts';
import Categories from '../Categories/Categories';

function Home() {
  return (
    <Container>
      <Categories/>
      <ListProducts/>
    </Container>
  )
}

export default Home