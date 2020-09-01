import React from 'react'
//import {EventHandler} from './componnents/layouts/events'
import {Counter} from './componnents/layouts/CounterApp'
import {Condition} from './componnents/layouts/conditionDisplay'
import {Log} from './componnents/layouts/logged'
import {StarWars} from './componnents/layouts/fetchApiData'

export const App = () => {
  
  const date = new Date()
  return (
    <div className="Events">
      <div>{date.getDate()}/{ date.getMonth()}/{date.getFullYear()}</div>

        <Counter/>
        <Condition/>
        <Log/>
        <StarWars/>
    </div>
  )
}
/*import Display from './produvt-state'
<Display/> 
*/
/*
Class Components
for using Component in the next line import React , {Component} from 'react
OR use React.Component
export class App() extends Component {
  myMethod(){

  }
  render(){
    const callMyMethod = this.myMethod()
    return (
      <div> 
      Put Jsx here
      call props using {this.props.whatever}
      </div>
    )
  }
}
 */


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