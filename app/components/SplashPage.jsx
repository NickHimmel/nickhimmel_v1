import React from 'react';
import {Link} from 'react-router';

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Nick Himmel</h1>
        <Link to="/portfolio/code" activeClassName="active">web development</Link>
        <h2>photography</h2>
      </div>
    )
  }
}

export default SplashPage;
