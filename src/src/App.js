import React from 'react'
import Products from './product'
import Product from './componnents/layouts/product-display'

export const App = () => {
  const productComponents = Products.map(product => <Product key= {product.id}  name= {product.name} description = {product.description} price= {product.price}/>)

  return (
    <div className="Products">
      {productComponents}
    </div>
  )
}

/*
//This is importing data from json like format file and displaying it as an array
import jokesData from './JokeData'
import { Joke } from './componnents/layouts/jokes'
 const jokesComponent = jokesData.map(joke => <Joke key ={joke.id} questions = {joke.questions} punchLine = {joke.punchLine}/>)
  
  return (
    <div className="App">
      {jokesComponent}
      </div>
  )
*/ 
/*import { Header } from './componnents/layouts/header';
import { Content } from './componnents/layouts/content';
import { Welcome } from './componnents/layouts/stateInClass';
import { Counter } from './componnents/layouts/counter';*/
/**
 Implicit vs Explicit Return
*/

/* <Header/>  
      <Content name="Namrata" surname="Podder">
      <p>Children prop</p>
      </Content>
    <Content name="Shireen" surname="Ganguly"/>
    <Welcome/>
    <Counter/>*/