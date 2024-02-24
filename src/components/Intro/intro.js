import React from 'react';
import './intro.css';
import bg from "../../assets/intro1.png"

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'am Iman</span>
        </div>
        <img src={bg} alt="" className="bg"/>

    </section>

  )
}

export default Intro;