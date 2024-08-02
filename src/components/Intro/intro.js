import React from 'react';
import './intro.css';
import bg from "../../assets/intro.png";
//import { Link } from 'react-scroll';
//import { IoBag } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            
            <span className='introText'> <span className = 'typing-text'>I'm <span className='introName'>Iman </span></span></span>
            <p className='introPara'> I am a Daedalus Honors Scholar at Hunter College pursing my Bachelors in Computer Science. I love to take on challenges where I can combine my passion for technology with my love for design and art.
            In my free time, I like to experiment with new recipes and perfect my culinary skills. Lately, I've also been into Arabic calligraphy and clay modeling.</p>
           
            <a href="https://github.com/ImanIkram" target="_blank" rel="noopener noreferrer">
            <button className='btn'>< FaGithub/>  GitHub  </button></a>
            
        </div>
        <img src={bg} alt="" className="bg"/>

    </section>

  )
}

export default Intro;