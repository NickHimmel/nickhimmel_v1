import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'app/components/Main.jsx';
import Portfolio from 'app/components/Portfolio'
import Photography from 'app/components/Photography.jsx';
import Code from 'app/components/Code.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="photography" component={Photography}></Route>
    </Route>
    <Route path="/portfolio" component={Portfolio}>
      <Route path="/portfolio/code" component={Code}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
