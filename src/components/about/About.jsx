import React from 'react'
import './About.css'
// import AboutImg from "../../assets/Portfoli.jpeg";
import Info from './Info';

const About = () => {
  return ( 
    <section className="about section" id='about'>
      <h2 className='section__title'>About <span>Me</span> </h2>
      <div className="about__container container grid">
        <div className="about__img">
          {/* <img src={AboutImg} alt="about__img" /> */}
          <span className="circle-spin"></span>
        </div>
        <div className="about__data">
          <Info />
          <p className='about__description'>Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
          </p>
          <p>With expertise in Node.js, MongoDB, and C++, I am skilled at building robust web applications . I am also familiar with C, Python and have experience with competitive programming on platforms like LeetCode, GeeksForGeeks.</p>
          <p>As a computer science engineering student, I am committed to staying up-to-date with the latest trends and technologies in my field. My goal is to apply my technical skills and knowledge to solve complex problems and deliver innovative solutions for clients. I am a hardworking, detail-oriented individual who enjoys collaborating with others and taking on new challenges.</p>
        </div>
      </div>
      {/* <span className="screen__background_shape screen__background_shape3"></span> */}
      {/* <span className="screen__background_shape screen__background_shape2"></span> */}
    </section> 
  )
}

export default About