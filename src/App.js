import React from 'react';
/*import { Header } from './componnents/layouts/header';
import { Content } from './componnents/layouts/content';
import { Welcome } from './componnents/layouts/stateInClass';
import { Counter } from './componnents/layouts/counter';*/
import { Joke } from './componnents/layouts/jokes'
/**
 Implicit vs Explicit Return
*/
export const App = () => {return (
    <div className="App">
      <Joke
        questions="what is this shite?"
        answer = "we here dear"
      />
      <Joke
        questions="what is this shite dark shite?"
        answer = "we here dear 2"
      />
      <Joke
      
        answer = "we here nani"
      />
    <Joke
        questions="what is this soft shite?"
        answer = "we here baka"
      />
    </div>
  );
}
/* <Header/>  
      <Content name="Namrata" surname="Podder">
      <p>Children prop</p>
      </Content>
    <Content name="Shireen" surname="Ganguly"/>
    <Welcome/>
    <Counter/>*/