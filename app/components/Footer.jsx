import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer_links">
          <li><a href="https://www.linkedin.com/in/nick-himmel">LinkedIn</a></li>
          <li className="middle_dot">&#183;</li>
          <li><a href="https://www.instagram.com/himmelnick/">Instagram</a></li>
          <li className="middle_dot">&#183;</li>
          <li><a href="https://github.com/NickHimmel">GitHub</a></li>
          <li className="middle_dot">&#183;</li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li className="middle_dot">&#183;</li>
          <li><a href="https://github.com/NickHimmel/NickHimmel.github.io" target="_blank">Code For This Site</a></li>
          <li className="middle_dot">&#183;</li>
          <li><a href="https://s3.us-east-2.amazonaws.com/nickhimmel.com/nick_himmel_resume.pdf" target="_blank">Download Resume</a></li>
        </ul>
      </div>
    )
  }
}
export default Footer;
