import React from "react"
import style from "./Button.module.scss"

const Button = ({ url, title, propStyle }) => {
  return (
    <button className={`${style.button} ${propStyle}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={style.text}
      >
        {title}
      </a>
    </button>
  )
}

export default Button
