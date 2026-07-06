import React, { useContext } from "react"
import Button from "../Buttons/Button"
import AppContext from "../../App-context"

const BackSide = ({ description, technologies, links }) => {
  const { mobile, tablet } = useContext(AppContext)

  const liveLinks =
    links && links.filter(link => !link.includes("github.com/kamilkulik"))
  const showLinkColumn = !mobile && !tablet && liveLinks && liveLinks.length > 0

  return (
    <div
      className={`tile__side tile__side--back${
        showLinkColumn ? "" : " tile__side--back--wide"
      }`}
    >
      {showLinkColumn && (
        <div className="tile__side--back__link">
          {links.map((link, index) => (
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
