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
            <div>Team Size</div>
            <div>{story.teamSize}</div>
          </div>
          <div className="carouselPage__header-item">
            <div>Budget</div>
            <div>{story.budget}</div>
          </div>
          <div className="carouselPage__header-item">
            <div>Tools</div>
            <div>{story.tools}</div>
          </div>
        </header>
        <main className="carouselPage__main">
          <p>{story.description}</p>
        </main>
      </div>
    </div>
  )
}

export default CarouselPage
