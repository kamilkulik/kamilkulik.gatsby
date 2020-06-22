import React from "react"

const FrontSide = ({ title, img, alt }) => {
  return (
    <div className="tile__side tile__side--front">
      <img src={img} alt={alt} className="tile__side--front__img" />
      <h3 className="tile__side--front__heading">
        <span className="tile__side--front__heading-span">{title}</span>
      </h3>
    </div>
  )
}

export default FrontSide
