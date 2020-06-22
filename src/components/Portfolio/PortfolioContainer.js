import React from "react"
import Tile from "./Tile"
import StaticTile from "./StaticTile"
import FrontSide from "./FrontSide"
import BackSide from "./BackSide"
import natours from "../../images/project-natours.png"
import trillo from "../../images/project-trillo.png"
import scss from "../../images/sass-icon.png"
import html5 from "../../images/html5-icon.png"
import css3 from "../../images/css3-icon.png"

const Portfolio = () => {
  return (
    <div className="wrapper">
      <Tile tileNumber="1">
        <FrontSide
          title="Natours"
          img={natours}
          alt="Natours advanced SCSS project"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://natours.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="2">
        <FrontSide
          title="Trillo"
          img={trillo}
          alt="Trillo advanced SCSS project"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://trillo.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="3">
        <FrontSide
          title="Auto-Check24"
          img={natours}
          alt="Commercial WiX project"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={[
            "https://www.auto-check24.pl",
            "http://github.com/kamilkulik",
          ]}
        />
      </Tile>
      <Tile tileNumber="4">
        <FrontSide
          title="isItHealthy"
          img={natours}
          alt="React Native image recognition app"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://natours.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="5">
        <FrontSide
          title="Investment Framework"
          img={natours}
          alt="Ongoing project for Investment Management"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://natours.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="6">
        <FrontSide
          title="Expensify"
          img={natours}
          alt="React expense app with data persistance"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://natours.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="7">
        <FrontSide
          title="Retrovania"
          img={natours}
          alt="e-Commerce site built during SoftServe's web development bootcamp"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://natours.com", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="8">
        <FrontSide
          title="WeseleKulikow.pl"
          img={natours}
          alt="Website for my brother's wedding"
        />
        <BackSide
          description="Fully responsive web page using modern technologies."
          technologies={[
            { img: html5, alt: "html5 icon" },
            { img: css3, alt: "css3 icon" },
            { img: scss, alt: "sass icon" },
          ]}
          links={["http://weselekulikow.pl", "http://github.com/kamilkulik"]}
        />
      </Tile>
      <Tile tileNumber="9">
        <StaticTile text="Your project here" />
      </Tile>
    </div>
  )
}

export default Portfolio
