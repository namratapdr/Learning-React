import React from 'react';
import { Header } from './componnents/layouts/header';
import { Content } from './componnents/layouts/content';
/**
 Implicit vs Explicit Return
*/
export const App = () => {return (
    <div className="App">
      <Header/>
      <Content />
    </div>
  );
}
