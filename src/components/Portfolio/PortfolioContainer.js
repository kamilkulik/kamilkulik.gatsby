import React, { useState, useContext } from "react"
import AppContext from "../../App-context"
import Tile from "./Tile"
import StaticTile from "./StaticTile"
import FrontSide from "./FrontSide"
import BackSide from "./BackSide"
import MobileBox from "./MobileBox"
import Carousel from "../ProjectManagement/Carousel"
import Content from "./Content"
import { Helmet } from "react-helmet"

const Portfolio = () => {
  const { mobile, tablet, mobileLand } = useContext(AppContext)

  const [currentSlide, setCurrentSlide] = useState(0)
  const transitionDur = 1000

  return (
    <div className="wrapper">
      <Helmet>
        <title>Project Portfolio</title>
      </Helmet>
      {mobile || mobileLand ? (
        <div className="wrapper--mobile">
          <Carousel
            slides={Content}
            pageNo={setCurrentSlide}
            classes=" mobile-version"
            transitionDuration={transitionDur}
          >
            <MobileBox project={Content[currentSlide]} slideNo={currentSlide} />
          </Carousel>
        </div>
      ) : (
        <div
          className={tablet && !mobile ? "wrapper--tablet" : "wrapper--desktop"}
        >
          {Content.map((project, index) => {
            return (
              <Tile tileNumber={index + 1} key={project.title}>
                <FrontSide
                  title={project.title}
                  img={project.img}
                  alt={project.alt}
                  links={project.links}
                  technologies={project.technologies}
                />
                <BackSide
                  description={project.description}
                  technologies={project.technologies}
                  links={project.links}
                />
              </Tile>
            )
          })}
          <Tile tileNumber="9">
            <StaticTile text="Your project here" />
          </Tile>
        </div>
      )}
    </div>
  )
}

export default Portfolio
