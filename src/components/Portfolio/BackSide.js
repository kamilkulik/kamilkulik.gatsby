import React from "react"
import Button from "../Buttons/Button"

const BackSide = ({ description, links, technologies }) => {
  return (
    <div className="tile__side tile__side--back">
      <div className="tile__side--back-container">
        {technologies &&
          technologies.map((tech, index) => (
            <img
              key={index}
              src={tech.img}
              alt={tech.alt}
              className="tile__side--back__techIco"
            />
          ))}
      </div>
      <div className="tile__side--back-description">
        <p>{description}</p>
      </div>
      <div className="tile__side--back__link">
        {links &&
          links.map((link, index) => (
            <Button
              key={index}
              title={index === 0 ? "live" : "GitHub"}
              url={link}
            />
          ))}
      </div>
    </div>
  )
}

export default BackSide
