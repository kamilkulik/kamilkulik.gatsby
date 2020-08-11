import React, { useContext } from "react"
import AppContext from "../../App-context"
import Button from "../Buttons/Button"

const FrontSide = ({ title, img, alt, links }) => {
  const { mobile, tablet } = useContext(AppContext)

  // <Img  />

  return (
    <div className="tile__side tile__side--front">
      <img src={img} alt={alt} className="tile__side--front__img" />
      <h3 className="tile__side--front__heading">
        <span className="tile__side--front__heading-span">{title}</span>
      </h3>
      {!mobile && tablet && (
        <div className="tile__side--front__link">
          {links &&
            links.map((link, index) => (
              <Button
                key={index}
                title={index === 0 ? "live" : "GitHub"}
                url={link}
              />
            ))}
        </div>
      )}
    </div>
  )
}

export default FrontSide
