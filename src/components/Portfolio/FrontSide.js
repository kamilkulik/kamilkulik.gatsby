import React, { useContext } from "react"
import AppContext from "../../App-context"

const FrontSide = ({ title, img, alt, technologies }) => {
  const { mobile, tablet } = useContext(AppContext)

  return (
    <div className="tile__side tile__side--front">
      <img src={img} alt={alt} className="tile__side--front__img" />
      <h3 className="tile__side--front__heading">
        <span className="tile__side--front__heading-span">{title}</span>
      </h3>
      {!mobile && tablet && (
        <div className="tile__side--front-container">
          {technologies &&
            technologies.map((tech, index) => (
              <img
                key={index}
                src={tech.img}
                alt={tech.alt}
                className="tile__side--front__techIco"
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default FrontSide
