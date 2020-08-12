import React from "react"
import Button from "../Buttons/Button"
import MyImg from "../../images/MyImage"

const MobileBox = ({ project, slideNo }) => {
  return (
    <div className={`carousel-mobile slide--${slideNo + 1}`}>
      <MyImg src={project.img} />
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
