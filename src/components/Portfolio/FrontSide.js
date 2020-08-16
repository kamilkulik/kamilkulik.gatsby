import React, { useContext } from "react"
import AppContext from "../../App-context"
import Button from "../Buttons/Button"
import MyImg from "../../images/MyImage"

const FrontSide = ({ title, img, alt, links }) => {
  const { mobile, tablet } = useContext(AppContext)

  // <Img  />

  return (
    <div className="tile__side tile__side--front">
      <MyImg src={img} />
      <h3 className="tile__side--front__heading">
        <span className="tile__side--front__heading-span">{title}</span>
      </h3>
      {!mobile && tablet && (
        <div className="tile__side--front__link">
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
    </div>
  )
}

export default FrontSide
