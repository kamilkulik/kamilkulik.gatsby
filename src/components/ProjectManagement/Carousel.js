import React, { useState, Children } from "react"
import Arrow from "./Arrow"
import useInMotion from "../../Hooks/useInMotion"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Carousel = ({
  slides,
  transitionDuration = 1000,
  pageNo,
  children,
  classes = "",
}) => {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState("next")
  const [inMotion, setInMotion] = useState(false)

  const pageCount = slides.length - 1

  useInMotion(setInMotion, transitionDuration, page)

  const changePage = direction => () => {
    setDirection(direction)
    if (!inMotion) {
      if (direction === "next" && page < pageCount) {
        setPage(page + 1)
        pageNo(page + 1)
      } else if (direction === "previous" && page > 0) {
        setPage(page - 1)
        pageNo(page - 1)
      }
    }
  }

  const currentPage = [slides[page]]

  return (
    <div className={`carousel${classes}`}>
      {page > 0 && <Arrow previous controls={changePage} />}
      <div className={`carousel--inner-container ${direction}`}>
        <TransitionGroup component={null}>
          {currentPage.map(story => (
            <CSSTransition
              key={story.flag}
              timeout={transitionDuration}
              classNames={`node`}
            >
              {children}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {page < pageCount && <Arrow next controls={changePage} />}
    </div>
  )
}

export default Carousel

/*

//////////  DOCUMENTATION  //////////

PROPS:
slides - mandatory, requires an array of objects. Each object needs a flag property which is used to let the Transition now it should kick in
transitionDuration - optional. 1s (1000ms) by default
pageNo - mandatory - lift the selected page into the parent component
children

*/
