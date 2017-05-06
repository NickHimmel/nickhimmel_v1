import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import SplashPage from 'app/components/SplashPage.jsx'
import Portfolio from 'app/components/Portfolio'
import Photography from 'app/components/Photography.jsx';
import Code from 'app/components/Code.jsx';
import About from 'app/components/About.jsx'
import css from './style.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={SplashPage}>
    </Route>
    <Route path="/portfolio" component={Portfolio}>
      <Route path="code" component={Code}></Route>
      <Route path="photography" component={Photography}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
