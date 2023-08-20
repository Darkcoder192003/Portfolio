import React from 'react'
import Data from './Data'
import Social from './Social'
import './home.css'
import Scrolldown from './ScrollDown'

const Home = () => {
  return (
    <section className="home section" id='home'> 
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div> 
        <Scrolldown />
        <span className="screen__background_shape screen__background_shape3"></span>
        <span className="screen__background_shape screen__background_shape2"></span>
      </div>
    </section>
  )
}

export default Home