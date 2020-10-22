import React from "react"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/PortfolioContainer"
import ProjectManagement from "../ProjectManagement/ProjectManagement"
import Contact from "../Contact/Contact"

export const pages = [
  {
    name: "home",
    index: 0,
  },
  {
    name: "project_management",
    index: 1,
  },
  { name: "portfolio", index: 2 },
  { name: "blog", index: 2 },
  { name: "contact", index: 3 },
]

const Content = [
  { number: "1", placeholder: "Home", content: <Home />, name: "home" },
  {
    number: "2",
    placeholder: "Project Management",
    content: <ProjectManagement />,
    name: "project_management",
  },
  {
    number: "3",
    placeholder: "Portfolio",
    content: <Portfolio />,
    name: "portfolio",
  },
  {
    number: "4",
    placeholder: "Contact",
    content: <Contact />,
    name: "contact",
  },
  { number: "5", placeholder: "5", content: <Home /> },
  { number: "6", placeholder: "6", content: <Home /> },
]

export default Content
