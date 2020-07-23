import React from "react"
import { ReactComponent as House } from "../../images/icons/house-door.svg"
import { ReactComponent as Easel } from "../../images/icons/easel.svg"
import { ReactComponent as Chat } from "../../images/icons/chat-left-text.svg"
import { ReactComponent as People } from "../../images/icons/people.svg"
// import NavigationItem from "./NavigationItem"

const NavigationContent = [
  {
    img: <House />,
    alt: "house-icon",
    title: "Home",
  },
  {
    img: <People />,
    alt: "people-icon",
    title: "PM",
  },
  {
    img: <Easel />,
    alt: "easel-icon",
    title: "Portfolio",
  },
  {
    img: <Chat />,
    alt: "chat-icon",
    title: "Contact",
  },
]

export default NavigationContent
