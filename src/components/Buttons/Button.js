import React from "react"
import style from "./Button.module.scss"

const Button = ({ url, title }) => {
  return (
    <button className={style.button}>
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
