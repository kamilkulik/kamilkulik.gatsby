import React from "react"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/PortfolioContainer"
import ProjectManagement from "../ProjectManagement/ProjectManagement"

const Content = [
  { number: "1", placeholder: "Home", content: <Home /> },
  {
    number: "2",
    placeholder: "Project Management",
    content: <ProjectManagement />,
  },
  { number: "3", placeholder: "Portfolio", content: <Portfolio /> },
  { number: "4", placeholder: "Contact", content: <Home /> },
  { number: "5", placeholder: "5", content: <Home /> },
  { number: "6", placeholder: "6", content: <Home /> },
]

export default Content

// const Blank = () => {
//   return <p>placeholder</p>
// }
