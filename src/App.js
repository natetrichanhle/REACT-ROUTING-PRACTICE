import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';
import Number from './components/Number';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route exact path='/:input'>
          <Number />
        </Route>
        <Route path='/:input/:textColor/:bgColor'>
          <Word />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
