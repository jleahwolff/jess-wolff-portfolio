import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Design from './components/Design';
import Development from './components/Development';
import Contact from './components/Contact';

import { Route } from 'react-router-dom';
import './App.css';

function App(){
  return(
    <div className={'min-h-screen'}>
      <Navigation/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about' component={About} />
      <Route path='/design' component={Design} />
      <Route path='/development' component={Development} />
      <Route path='/contact' component={Contact} />
    </div>
)
}


export default App;