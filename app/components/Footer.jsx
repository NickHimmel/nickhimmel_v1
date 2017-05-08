import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer_links">
          <li><Link to="/portfolio/code" activeClassName="active">Web Development</Link></li>
          <li><Link to="/portfolio/photography" activeClassName="active">Photography</Link></li>
          <li><a href="https://www.linkedin.com/in/nick-himmel">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/himmelnick/">Instagram</a></li>
          <li><a href="https://github.com/NickHimmel">GitHub</a></li>
          <li><Link to="/portfolio/about" activeClassName="active">About</Link></li>
        </ul>
      </div>
    )
  }
}
export default Footer;
