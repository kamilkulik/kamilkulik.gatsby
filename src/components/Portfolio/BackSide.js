import React, { useContext } from "react"
import Button from "../Buttons/Button"
import AppContext from "../../App-context"

const BackSide = ({ description, technologies, links }) => {
  const { mobile, tablet } = useContext(AppContext)

  return (
    <div className="tile__side tile__side--back">
      {!mobile && !tablet && (
        <div className="tile__side--back__link">
          {links &&
            links.map((link, index) => (
              <Button
                key={index}
                title={
                  link.includes("github.com/kamilkulik") ? "GitHub" : "Live"
                }
                url={link}
              />
            ))}
        </div>
      )}
      <div className="tile__side--back-description">{description}</div>
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
    </div>
  )
}

export default BackSide
