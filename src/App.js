import React from 'react';
import Home from './components/Home';

import { Route } from 'react-router-dom';
import './App.css';

function App(){
  return(
    <div className={'min-h-screen'}>
      {/* <Navigation/> */}
      <Route exact path='/'>
        <Home />
      </Route>
    </div>
)
}


export default App;
