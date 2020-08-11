import React from "react"

const CarouselPage = ({ story }) => {
  return (
    <div className="carouselPage">
      <div className="carouselPage__flag">
        <h1>{story.flag}</h1>
      </div>
      <div className="carouselPage__content">
        <header className="carouselPage__header">
          <div className="carouselPage__header-item">
            <p>Team Size</p>
            <p>{story.teamSize}</p>
          </div>
          <div className="carouselPage__header-item">
            <p>Budget</p>
            <p>{story.budget}</p>
          </div>
          <div className="carouselPage__header-item">
            <p>Tools</p>
            <p>{story.tools}</p>
          </div>
        </header>
        <main className="carouselPage__main">
          <div className="carouselPage__main-wrapper">{story.description}</div>
        </main>
      </div>
    </div>
  )
}

export default CarouselPage
