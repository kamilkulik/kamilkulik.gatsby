import React from "react"

const Button = ({ url, title, propStyle }) => {
  return (
    <button className={`button ${propStyle}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="button__text"
      >
        {title}
      </a>
    </button>
  )
}

export default Button
