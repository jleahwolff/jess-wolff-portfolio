import React from 'react';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';

import { Route } from 'react-router-dom';
import './App.css';

function App(){
  return(
    <div className={'min-h-screen'}>
      {/* <Navigation/> */}
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/404'>
        <FourOhFour/>
      </Route>
    </div>
)
}


export default App;
