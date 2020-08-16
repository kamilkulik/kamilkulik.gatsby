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

const FrontSide = ({ title, img, alt, links }) => {
  const { mobile, tablet, mobileLand } = useContext(AppContext)

  return (
    <div className="tile__side tile__side--front">
      <MyImg
        src={img}
        style={
          mobile
            ? mobileStyling
            : mobileLand
            ? mobileStylingLand
            : desktopStyling
        }
        imgStyle={imgStyle}
      />
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
