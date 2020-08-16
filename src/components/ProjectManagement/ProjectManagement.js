import React, { useState, useContext } from "react"
import AppContext from "../../App-context"
import Carousel from "./Carousel"
import Stories from "./Stories"
import PmCard from "./PmCard"
import { Helmet } from "react-helmet"

const ProjectManagement = () => {
  const { mobile, tablet, mobileLand } = useContext(AppContext)
  const [carouselPage, setCarouselPage] = useState(0)

  const transitionDur = 1000

  return (
    <div className="wrapper">
      <Helmet>
        <title>Project Management</title>
      </Helmet>
      <div
        className={
          (mobile && !tablet) || mobileLand
            ? "wrapper--mobile"
            : !mobile && tablet && !mobileLand
            ? "wrapper--tabletPM"
            : "wrapper"
        }
      >
        <Carousel
          transitionDuration={transitionDur}
          slides={Stories}
          pageNo={setCarouselPage}
          classes={
            (mobile && !tablet) || mobileLand
              ? " mobile-version"
              : !mobile && tablet && !mobileLand
              ? " tablet-version"
              : ""
          }
        >
          <PmCard story={Stories[carouselPage]} />
        </Carousel>
      </div>
    </div>
  )
}

export default ProjectManagement
