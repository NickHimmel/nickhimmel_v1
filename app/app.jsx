import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import SplashPage from 'SplashPage.jsx';
import Main from 'Main.jsx';
import Project from 'Project.jsx'
import About from 'About.jsx';
import Styles from 'app/styles/App.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={SplashPage}/>
      <Route path="/:project" component={Project}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
