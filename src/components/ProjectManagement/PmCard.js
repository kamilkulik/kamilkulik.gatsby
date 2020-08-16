import React from "react"

const PmCard = ({ story }) => {
  return (
    <div className="pmCard">
      <div className="pmCard__flag">
        <h1>{story.flag}</h1>
      </div>
      <div className="pmCard__content">
        <header className="pmCard__header">
          <div className="pmCard__header-item">
            <p>Team Size</p>
            <p>{story.teamSize}</p>
          </div>
          <div className="pmCard__header-item">
            <p>Budget</p>
            <p>{story.budget}</p>
          </div>
          <div className="pmCard__header-item">
            <p>Tools</p>
            <p>{story.tools}</p>
          </div>
        </header>
        <main className="pmCard__main">
          <div className="pmCard__main-wrapper">{story.description}</div>
        </main>
      </div>
      <div className="pmCard__footer">
        <img src={story.img} className="pmCard__footer-image" />
      </div>
    </div>
  )
}

export default PmCard
