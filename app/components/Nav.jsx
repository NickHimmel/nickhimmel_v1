import React from 'react';
import {Link} from 'react-router';

const Nav = () => {
  return (
    <div className="nav">
      <h2 className="nav_name name"><Link to="/" activeClassName="active">Nick Himmel</Link></h2>
      <a id="drop_down_menu" className="closed" onClick={handleClick}>
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
  let drop_down_menu = document.getElementById("drop_down_menu")
  let hamburger_icon = document.getElementById("drop_down_menu").children;
  if (drop_down_menu.classList.contains('closed')) {
    for (var i = 0; i < hamburger_icon.length; i++) {
        hamburger_icon[i].classList.add('change' + i);
        drop_down_menu.classList.remove('closed');
        drop_down_menu.classList.add('open');
    }
  }
  else {
    for (var i = 0; i < hamburger_icon.length; i++) {
        hamburger_icon[i].classList.remove('change' + i);
        drop_down_menu.classList.add('closed');
        drop_down_menu.classList.remove('open');
    }
  }
}

export default Nav;
