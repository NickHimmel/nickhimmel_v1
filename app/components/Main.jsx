import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Nick Himmel</h1>
        <h2>web development</h2>
        <Link to="/code" activeClassName="active">web development</Link>
        <h2>photography</h2>

      </div>
    )
  }
}

export default Main;
