import React from "react"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/PortfolioContainer"

const Content = [
  { class: "front", placeholder: "Home", content: <Home /> },
  { class: "back", placeholder: "About", content: <Home /> },
  { class: "right", placeholder: "Portfolio", content: <Portfolio /> },
  { class: "left", placeholder: "Contact", content: <Home /> },
  { class: "top", placeholder: "5", content: <Home /> },
  { class: "bottom", placeholder: "6", content: <Home /> },
]

export default Content

const Blank = () => {
  return <p>placeholder</p>
}
