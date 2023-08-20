import React from 'react'
// import './home.css'
import {FaArrowRight} from 'react-icons/fa'

const Data = () => {
  return (
    <div className="home__data">
        <h2>Hello ,Its Me</h2>
        <h1 className="home__title">Kuldeep Tiwari</h1>
        <h3 className="home__subtitle">And I'm a <span>Frontend Devloper</span></h3>
        <p className="home__description">As an aspiring full-stack software developer, I am pursuing a Bachelor's of Technology in Information Technology and have developed a strong foundation in a range of technical skills. </p>
        <a href="#about" className='button'>More About Me<span className='button__icon'><FaArrowRight/></span></a>
    </div>
  )
}

export default Data