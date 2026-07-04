import React from "react"

const Button = ({ url, title, propStyle }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button__text ${propStyle || ""}`}
    >
      {title}
    </a>
  )
}

export default Button
