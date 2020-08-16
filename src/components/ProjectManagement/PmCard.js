import React from "react"
import MyImage from "../../images/MyImage"

const desktopStyling = {
  height: "100%",
  width: "100%",
}

const mobileStyling = {
  position: "relative",
  width: "100%",
}

const mobileStylingLand = {
  gridArea: "img",
}

const imgStyle = {
  objectPosition: "top",
  height: "100%",
  width: "100%",
}

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
        <MyImage
          src={story.img}
          imgStyle={imgStyle}
          style={{ height: "100%" }}
        />
      </div>
    </div>
  )
}

export default PmCard
