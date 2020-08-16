import React, { useContext } from "react"
import AppContext from "../../App-context"
import Button from "../Buttons/Button"
import MyImg from "../../images/MyImage"

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
  objectFit: "contain",
  padding: "5% 5% 0% 5%",
}

const MobileBox = ({ project, slideNo }) => {
  const { mobile, mobileLand } = useContext(AppContext)
  return (
    <div className={`carousel-mobile slide--${slideNo + 1}`}>
      <MyImg
        src={project.img}
        style={
          mobile
            ? mobileStyling
            : mobileLand
            ? mobileStylingLand
            : desktopStyling
        }
        imgStyle={imgStyle}
      />
      <h3 className="carousel-mobile__heading">
        <span className="carousel-mobile__heading-span">{project.title}</span>
      </h3>
      <div className="carousel-mobile__description">{project.description}</div>
      <div className="carousel-mobile__link">
        {project.links &&
          project.links.map((link, index) => (
            <Button
              key={index}
              title={index === 0 ? "live" : "GitHub"}
              url={link}
              propStyle={"mobileButton"}
            />
          ))}
      </div>
      <div className="carousel-mobile__technologies">
        {project.technologies &&
          project.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.img}
              alt={tech.alt}
              className="carousel-mobile__techIco"
            />
          ))}
      </div>
    </div>
  )
}

export default MobileBox
