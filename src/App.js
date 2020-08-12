import React from 'react';
import { Header } from './componnents/layouts/header';
import { Content } from './componnents/layouts/content';
import { Welcome } from './componnents/layouts/stateInClass';
import { Counter } from './componnents/layouts/counter';
/**
 Implicit vs Explicit Return
*/
export const App = () => {return (
    <div className="App">
      <Header/>  
      <Content name="Namrata" surname="Podder">
      <p>Children prop</p>
      </Content>
    <Content name="Shireen" surname="Ganguly"/>
    <Welcome/>
    <Counter/>
    </div>
  );
}
