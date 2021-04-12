import React from 'react';
import Home from './components/Home';
import FourOhFour from './components/FourOhFour';
import About from './components/About';

import { Route } from 'react-router-dom';
import './App.css';

function App(){
  return(
    <div className={'min-h-screen font-poppins overflow-x-hidden'}>
      {/* <Navigation/> */}
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/404'>
        <FourOhFour/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
    </div>
)
}


export default App;
