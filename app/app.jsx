import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import SplashPage from 'SplashPage.jsx';
import Main from 'Main.jsx';
import Code from 'Code.jsx';
import Photo from 'Photo.jsx';
import About from 'About.jsx';
import Styles from 'app/styles/App.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage}/>
      <Route path="/code" component={Code}/>
      <Route path="/photo" component={Photo}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
