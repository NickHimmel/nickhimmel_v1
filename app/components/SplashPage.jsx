import React from 'react';
import {Link} from 'react-router';

const SplashPage = () => {
  return (
    <div className="splashpage">
        <h1 className="splashpage_name name">Nick Himmel</h1>
      <div>
        <h2 className="splashpage_header"><Link to="/code" activeClassName="active">web<br />development</Link></h2>
      </div>
      <div className="splashpage_line"></div>
      <div>
        <h2 className="splashpage_header"><Link to="/photo" activeClassName="active">photography</Link></h2>
      </div>
      <div>
        <ul>
          <li><a href="https://www.linkedin.com/in/nick-himmel" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/himmelnick/" target="_blank">Instagram</a></li>
          <li className="no_right_border"><a href="https://github.com/NickHimmel" target="_blank">GitHub</a></li>
        </ul>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><a href="https://github.com/NickHimmel" target="_blank">Code For This Site</a></li>
          <li className="no_right_border"><a href="https://github.com/NickHimmel" target="_blank">Resume</a></li>
        </ul>
      </div>
    </div>
  )
}


export default SplashPage;
