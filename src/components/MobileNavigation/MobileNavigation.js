import React, { useContext } from "react"
import AppContext from "../../App-context"
import NavigationItem from "./NavigationItem"
import House from "../../images/icons/house-door.svg"
import Easel from "../../images/icons/easel.svg"
import Chat from "../../images/icons/chat-left-text.svg"
import People from "../../images/icons/people.svg"
import Pencil from "../../images/icons/pencil.svg"
import { pages } from "../CubeWrapper/Content"

const MobileNavigation = ({ spinCube }) => {
  const { face, width, height, mobileLand, tablet } = useContext(AppContext)
  const activeIndex = pages.indexOf(pages.find(page => page.name === face))

  const iconWidth =
    0.5 * ((mobileLand ? height / 1.5 : tablet ? height / 2 : width) / 8)

  return (
    <div className="mobile-nav">
      <NavigationItem
        page={"home"}
        title={"Home"}
        handleClick={spinCube}
        active={0 === activeIndex ? "active" : ""}
      >
        <House
          alt={"house-icon"}
          width={iconWidth}
          height={iconWidth}
          title={"Home"}
          className={`mobile-nav__item__ico ${
            0 === activeIndex ? "active" : ""
          }`}
        />
      </NavigationItem>
      <NavigationItem
        page={"project_management"}
        title={"PM"}
        handleClick={spinCube}
        active={1 === activeIndex ? "active" : ""}
      >
        <People
          alt={"people-icon"}
          width={iconWidth}
          height={iconWidth}
          title={"Project Management"}
          className={`mobile-nav__item__ico ${
            1 === activeIndex ? "active" : ""
          }`}
        />
      </NavigationItem>
      <NavigationItem
        page={"portfolio"}
        title={"Portfolio"}
        handleClick={spinCube}
        active={2 === activeIndex ? "active" : ""}
      >
        <Easel
          alt={"portfolio-icon"}
          width={iconWidth}
          height={iconWidth}
          title={"Portfolio"}
          className={`mobile-nav__item__ico ${
            2 === activeIndex ? "active" : ""
          }`}
        />
      </NavigationItem>
      <NavigationItem
        page={"blog"}
        title={"Blog"}
        handleClick={spinCube}
        active={3 === activeIndex ? "active" : ""}
      >
        <Pencil
          alt={"blog-icon"}
          width={iconWidth}
          height={iconWidth}
          title={"Blog"}
          className={`mobile-nav__item__ico ${
            3 === activeIndex ? "active" : ""
          }`}
        />
      </NavigationItem>
      <NavigationItem
        page={"contact"}
        title={"Contact"}
        handleClick={spinCube}
        active={4 === activeIndex ? "active" : ""}
      >
        <Chat
          alt={"contact-icon"}
          width={iconWidth}
          height={iconWidth}
          title={"Contact"}
          className={`mobile-nav__item__ico ${
            4 === activeIndex ? "active" : ""
          }`}
        />
      </NavigationItem>
    </div>
  )
}

export default MobileNavigation
