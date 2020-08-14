import React from "react"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <section className="home">
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="http://kamilkulik.com" />
      </Helmet>
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
    </section>
  )
}

export default Home
