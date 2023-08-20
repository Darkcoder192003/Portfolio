import React from 'react'
import CircularProgressBar from './CircularProgressBar'
import "./Skills.css"

const Skills = () => {
  
  return (
    <section className='skills' id='skills'>
      <h3 className='section__title subtitle__center'> My Skills</h3>
      <div className="skills__container grid">
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="75"/>
          </div> 
          <h2 className="skills__title">HTML</h2>
        </div>
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="60"/>
          </div>
          <h2 className="skills__title">CSS</h2>
        </div>
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="70"/>
          </div>
          <h2 className="skills__title">JAVASCRIPT</h2>
        </div>
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="50"/>
          </div>
          <h2 className="skills__title">JQUERY</h2>
        </div>
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="70"/>
          </div>
          <h2 className="skills__title">REACT</h2>
        </div>
        <div className="progress_box">
          <div className="progress_circle">
          <CircularProgressBar percentage="65"/>
          </div>
          <h2 className="skills__title">NODE-JS</h2>
        </div>
      </div>
    </section>
  )
}

export default Skills