import React from 'react';
import {Link} from 'react-router';

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav_name name"><Link to="/" activeClassName="active">Nick Himmel</Link></h2>
      <a id="hamburger_icon" className="closed" onClick={handleClick}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </a>
      <ul className="nav_links">
        <li><Link to="/code" activeClassName="active">Web Development</Link></li>
        <li><Link to="/photo" activeClassName="active">Photography</Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
      </ul>
      <ul className="nav_links nav_dropdown">
        <li><a href="https://www.linkedin.com/in/nick-himmel">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/himmelnick/">Instagram</a></li>
        <li><a href="https://github.com/NickHimmel">GitHub</a></li>
      </ul>
    </div>
  )
}

const handleClick = () => {
  let hamburgerIcon = document.getElementById("hamburger_icon")
  let bars = hamburgerIcon.children;
  let dropDownMenu = document.querySelectorAll('.nav_links')
  if (hamburgerIcon.classList.contains('closed')) {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.add('change' + i);
    }
    hamburgerIcon.classList.remove('closed');
    hamburgerIcon.classList.add('open');
  }
  else {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.remove('change' + i);
    }
    hamburgerIcon.classList.add('closed');
    hamburgerIcon.classList.remove('open');
  }
}

export default Nav;
