import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h2 className="nav_name name"><Link to="/" activeClassName="active">Nick Himmel</Link></h2>
        <ul className="nav_links">
          <li><Link to="/code" activeClassName="active">Web Development</Link></li>
          <li><Link to="/photography" activeClassName="active">Photography</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav;
