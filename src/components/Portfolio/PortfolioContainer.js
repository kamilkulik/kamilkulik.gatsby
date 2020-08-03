import React, { useState } from "react"
import Tile from "./Tile"
import StaticTile from "./StaticTile"
import FrontSide from "./FrontSide"
import BackSide from "./BackSide"
import MobileBox from "./MobileBox"
import Carousel from "../ProjectManagement/Carousel"
import Content from "./Content"
import useCheckIfMobile from "../../Hooks/useCheckIfMobile"

// TO DO
// Create mobile presentational component for portfolio project

const Portfolio = () => {
  const { mobile, tablet } = useCheckIfMobile()

  const [currentSlide, setCurrentSlide] = useState(0)
  const transitionDur = 1000

  return (
    <div className="wrapper">
      {mobile ? (
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
        // <div className={tablet ? "wrapper--tablet" : "wrapper--desktop"}>
        <div className={"wrapper--desktop"}>
          {Content.map((project, index) => {
            // return tablet ? (
            //   <MobileBox project={project} slideNo={index} />
            // ) : (
            return (
              <Tile tileNumber={index + 1} key={project.title}>
                <FrontSide
                  title={project.title}
                  img={project.img}
                  alt={project.alt}
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
