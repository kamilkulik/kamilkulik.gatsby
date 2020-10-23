import React from "react"
import { ReactComponent as House } from "../../images/icons/house-door.svg"
import { ReactComponent as Easel } from "../../images/icons/easel.svg"
import { ReactComponent as Chat } from "../../images/icons/chat-left-text.svg"
import { ReactComponent as People } from "../../images/icons/people.svg"
import { ReactComponent as Pencil } from "../../images/icons/pencil.svg"
// import NavigationItem from "./NavigationItem"

// Bootstrap icons https://icons.getbootstrap.com/
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
    img: <Pencil />,
    alt: "pencil-icon",
    title: "Blog",
  },
  {
    img: <Chat />,
    alt: "chat-icon",
    title: "Contact",
  },
]

export default NavigationContent
