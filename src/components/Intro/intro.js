import React from 'react';
import './intro.css';
import bg from "../../assets/intro1.png";
import { Link } from 'react-scroll';
import { IoBag } from "react-icons/io5";

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Iman</span><br />Student</span>
            <p className='introPara'> I am a Daedalus Scholar Student at Hunter College pursing my Bachelors in Computer Science. Combining my passion for technology with my love for design and innovation, I thrive on crafting imaginative solutions to complex problems.</p>
            <Link><button className='btn'><IoBag/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg"/>

    </section>

  )
}

export default Intro;