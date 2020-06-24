import React from "react"
import { animated } from "react-spring"

const Home = () => {
  return (
    <animated.section className="home">
      <div className="home-container">
        <div className="home-container--content">
          <h1>Kamil Kulik</h1>
          <h4>FrontEnd Developer</h4>
          <h4>Project Manager</h4>
          <h4>Inline Skater</h4>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-footer-container">
          <div className="home-footer-container--content home-footer-container--content__footer">
            <h1>Kamil Kulik</h1>
            <h4>FrontEnd Developer</h4>
            <h4>Project Manager</h4>
            <h4>Inline Skater</h4>
          </div>
        </div>
      </footer>
    </animated.section>
  )
}

export default Home
