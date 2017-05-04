import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <h2><Link to="/" activeClassName="active">Nick Himmel</Link></h2>
        <ul>
          <li>Web Projects</li>
          <li>Photo Projects</li>
          <li>About Projects</li>
        </ul>
      </div>
    )
  }
}

export default Nav;
