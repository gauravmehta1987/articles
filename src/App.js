import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article/Article';
import { Window } from '@progress/kendo-react-dialogs';
import Page1 from './Page1';
import Page2 from './Page2';
import Header from './Header';
// import {Router, Route} from 'react-router';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter >
          <div className="App">
          
            <Header />
            
              <Route path="/home" component={Page1} />
              <Route path="/list" component={Page2} />
        
          </div>
    </BrowserRouter>
  );
}

export default App;
