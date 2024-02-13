import React from 'react';
import './navbar.css';
import logo from '../../assets/II.png';
import CMe from '../../assets/2.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo}alt="logo" className='logo'/>
        <div className="menu">
            <Link className="menuListItem">Home</Link>
            <Link className="menuListItem">About</Link>
            <Link className="menuListItem">Portfolio</Link>
            <Link className="menuListItem">Skills</Link>
        </div>
        <button className="menuButton">
            <img src={CMe} alt="" className="menuButtonIcon" />Contact Me</button>
    </nav>
  )
}

export default Navbar