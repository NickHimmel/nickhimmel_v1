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
        <li className="no_right_border"><Link to="/about" activeClassName="active">About</Link></li>
        <li className="nav_dropdown"><a href="https://www.linkedin.com/in/nick-himmel">LinkedIn</a></li>
        <li className="nav_dropdown"><a href="https://www.instagram.com/himmelnick/">Instagram</a></li>
        <li className="nav_dropdown"><a href="https://github.com/NickHimmel">GitHub</a></li>
        <li className="nav_dropdown"><a href="https://github.com/NickHimmel" target="_blank">Code For This Site</a></li>
        <li className="nav_dropdown"><a href="https://github.com/NickHimmel" target="_blank">Resume</a></li>
      </ul>
    </div>
  )
}

const handleClick = () => {
  let hamburgerIcon = document.getElementById("hamburger_icon")
  let bars = hamburgerIcon.children;
  let dropDownMenu = document.querySelector('.nav_links');
  if (hamburgerIcon.classList.contains('closed')) {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.add('change' + i);
    }
    hamburgerIcon.classList.remove('closed');
    hamburgerIcon.classList.add('open');
    dropDownMenu.classList.add('show_menu');
  }
  else {
    for (var i = 0; i < bars.length; i++) {
        bars[i].classList.remove('change' + i);
    }
    hamburgerIcon.classList.add('closed');
    hamburgerIcon.classList.remove('open');
    dropDownMenu.classList.remove('show_menu');
  }
}

export default Nav;
