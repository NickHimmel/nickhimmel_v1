import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import SplashPage from 'app/components/SplashPage.jsx'
import Code from 'app/components/Code.jsx';
import Photography from 'app/components/Photography.jsx';
import About from 'app/components/About.jsx'
import styles from './App.css'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={SplashPage}></Route>
    <Route path="/code" component={Code}></Route>
    <Route path="/photography" component={Photography}></Route>
    <Route path="/about" component={About}></Route>
  </Router>,
  document.getElementById('app')
);
