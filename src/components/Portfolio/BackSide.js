import React, { useContext } from "react"
import Button from "../Buttons/Button"
import AppContext from "../../App-context"

const BackSide = ({ description, links, technologies }) => {
  const { mobile, tablet } = useContext(AppContext)

  return (
    <div className="tile__side tile__side--back">
      {!mobile && !tablet && (
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
      )}
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
