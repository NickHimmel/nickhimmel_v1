import React from 'react';
import {Link} from 'react-router';

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Nick Himmel</h1>
        <div>
          <h2><Link to="/portfolio/code" activeClassName="active">web development</Link></h2>
        </div>
        <div>
          <h2><Link to="/portfolio/photography" activeClassName="active">photography</Link></h2>
        </div>
      </div>
    )
  }
}

export default SplashPage;
