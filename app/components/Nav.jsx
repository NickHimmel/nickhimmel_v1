import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2><Link to="/" activeClassName="active">Nick Himmel</Link></h2>
        <ul>
          <li><Link to="/portfolio/code" activeClassName="active">web development</Link></li>
          <li><Link to="/portfolio/photography" activeClassName="active">photography</Link></li>
          <li>About Projects</li>
        </ul>
      </div>
    )
  }
}

export default Nav;
