import React, { useState } from "react"
import Carousel from "./Carousel"
import Stories from "./Stories"
import CarouselPage from "./CarouselPage"

const ProjectManagement = () => {
  const [carouselPage, setCarouselPage] = useState(0)

  const transitionDur = 1000

  return (
    <section className="PM">
      <Carousel
        transitionDuration={transitionDur}
        slides={Stories}
        pageNo={setCarouselPage}
      >
        <CarouselPage story={Stories[carouselPage]} />
      </Carousel>
    </section>
  )
}

export default ProjectManagement
