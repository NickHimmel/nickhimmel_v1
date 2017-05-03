import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from 'app/components/Main.jsx';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
