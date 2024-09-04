import React from 'react';
import './navbar.css';
import logo from '../../assets/II.png';
import CMe from '../../assets/2.png';
import { Link} from 'react-scroll';
 

const Navbar = () => {
  return (
  
    <nav className="navbar">
      <a href="index.html">
        <img src={logo}alt="logo" className='logo'/>
        </a>
        <div className="menu">
          
            <Link to="intro" className="menuListItem" smooth={true} duration={500}>About</Link>

            <a href='https://drive.google.com/file/d/1co6W0Mfy-djLuJuaqo0NQyEEEMP1Sp8H/view?usp=sharing'className="menuListItem" target="_blank" rel="noopener noreferrer">
              
            Resume </a> 

           
        </div>
      
      
      
        <button className="menuButton" > 
            <img src={CMe} alt="" className="menuButtonIcon" /> 
            <a href="https://www.linkedin.com/in/iman-ikram-9868a1218" target="_blank" rel="noopener noreferrer">
            LinkedIn
            </a>
            </button>
           
      </nav>
  )
}

export default Navbar

  // <Link className="menuListItem">Home</Link> // 
   //<Link className="menuListItem">Skills</Link>
