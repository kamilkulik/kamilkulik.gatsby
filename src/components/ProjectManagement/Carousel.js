import React, { useState } from "react"
import Arrow from "./Arrow"
import Stories from "./Stories"
import CarouselPage from "./CarouselPage"
import { TransitionGroup, CSSTransition } from "react-transition-group"

const Carousel = () => {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState("next")
  const pageCount = Stories.length - 1

  const changePage = direction => () => {
    console.log(direction)
    setDirection(direction)
    if (direction === "next" && page < pageCount) setPage(page + 1)
    else if (direction === "previous" && page > 0) setPage(page - 1)
  }

  const currentPage = [Stories[page]]

  const getNodesArray = () => {
    const target = document.getElementsByClassName("carouselPage")
    const nodesArray = Array.from(target)
    return nodesArray
  }

  const removeDone = () => {
    const nodes = getNodesArray()
    const previousClass = "previous-enter-done"
    const nextClass = "next-enter-done"
    nodes.forEach(node => {
      if (node.classList.contains(previousClass))
        node.classList.remove(previousClass)
      else if (node.classList.contains(nextClass))
        node.classList.remove(nextClass)
    })
  }

  const adjustDirection = () => {
    const nodes = getNodesArray()
    const previousClass = "previous-exit"
    const nextClass = "next-exit"
    const previousClassActive = "previous-exit-active"
    const nextClassActive = "next-exit-active"
    console.log("adjust")
    nodes.forEach(node => {
      if (node.classList.contains(previousClass) && direction === "next") {
        console.log("replacing previous")
        node.classList.replace(previousClass, nextClass)
        node.classList.replace(previousClassActive, nextClassActive)
      }
      if (node.classList.contains(nextClass) && direction === "previous") {
        console.log("replacing next")
        node.classList.replace(nextClass, previousClass)
        node.classList.replace(nextClassActive, previousClassActive)
      }
    })
  }

  return (
    <div className="carousel">
      {page > 0 && <Arrow previous controls={changePage} />}
      <div className="carousel--inner-container">
        <TransitionGroup component={null}>
          {currentPage.map(story => (
            <CSSTransition
              key={story.flag}
              timeout={10000}
              onEntered={removeDone}
              onExiting={adjustDirection}
              classNames={`${direction}`}
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
