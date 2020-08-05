import React, { useState, useContext } from "react"
import AppContext from "../../App-context"
import Carousel from "./Carousel"
import Stories from "./Stories"
import CarouselPage from "./CarouselPage"

const ProjectManagement = () => {
  const { mobile, tablet } = useContext(AppContext)
  const [carouselPage, setCarouselPage] = useState(0)

  const transitionDur = 1000

  return (
    <div className={mobile && !tablet ? "wrapper--mobile" : "wrapper"}>
      <Carousel
        transitionDuration={transitionDur}
        slides={Stories}
        pageNo={setCarouselPage}
        classes={mobile && !tablet ? " mobile-version" : ""}
      >
        <CarouselPage story={Stories[carouselPage]} />
      </Carousel>
    </div>
  )
}

export default ProjectManagement
