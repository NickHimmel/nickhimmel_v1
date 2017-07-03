import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import SplashPage from 'SplashPage.jsx';
import Main from 'Main.jsx';
import Code from 'Code.jsx';
import Photography from 'Photography.jsx';
import About from 'About.jsx';
import Styles from 'app/styles/App.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={SplashPage}></Route>
    <Route path="/:project" component={Main}/>
  </Router>,
  document.getElementById('app')
);
