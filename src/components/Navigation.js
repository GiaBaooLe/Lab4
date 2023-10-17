import React from 'react';
import { Chip, Icon, Navbar } from 'react-materialize';
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';


export default function Navigation() {
  // const { theme, toggle, dark } = useContext(ThemeContext);
  return (


    <Navbar
      className="menu custom-navbar"
      alignlink="right"
      brand={<span className="brand-logo">MeoMeoFilm</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <Link to="/">
            <Icon left></Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left></Icon>About
          </Link>
        </li>
        <li to="contact">
          <Link to="/contact">
            <Icon left></Icon>Contact
          </Link>
        </li>
      </ul>
      <Chip
  close={false}
  closeIcon={<Icon className="close">close</Icon>}
  options={null}
>
  <img
    alt="Contact Person"
    className="responsive-img"
    src="https://materializecss.com/images/yuna.jpg"
  />
  Le Nguyen Gia Bao
</Chip>
    </Navbar>
    
  );
}
