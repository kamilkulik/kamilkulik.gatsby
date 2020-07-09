import React, { useState } from "react"
import Arrow from "./Arrow"
import Stories from "./Stories"
import CarouselPage from "./CarouselPage"
import useInMotion from "../../Hooks/useInMotion"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Carousel = () => {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState("next")
  const [inMotion, setInMotion] = useState(false)

  const pageCount = Stories.length - 1
  const transitionDuration = 1000

  useInMotion(setInMotion, transitionDuration, page)

  const changePage = direction => () => {
    setDirection(direction)
    if (!inMotion) {
      if (direction === "next" && page < pageCount) setPage(page + 1)
      else if (direction === "previous" && page > 0) setPage(page - 1)
    }
  }

  const currentPage = [Stories[page]]

  return (
    <div className="carousel">
      {page > 0 && <Arrow previous controls={changePage} />}
      <div className={`carousel--inner-container ${direction}`}>
        <TransitionGroup component={null}>
          {currentPage.map(story => (
            <CSSTransition
              key={story.flag}
              timeout={transitionDuration}
              classNames={`node`}
            >
              {<CarouselPage story={story} key={story.flag} />}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {page < pageCount && <Arrow next controls={changePage} />}
    </div>
  )
}

export default Carousel
