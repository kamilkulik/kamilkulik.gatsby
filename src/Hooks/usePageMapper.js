import React, { useContext, useState, useEffect } from "react"
import Content from "../components/CubeWrapper/Content"
import AppContext from "../App-context"
import Blog from "../components/Blog/Blog"

const usePageMapper = () => {
  const { face } = useContext(AppContext)
  const [content, setContent] = useState(Content)

  useEffect(() => {
    if (face !== "blog") setContent(Content)
    else
      setContent(
        Content.map(page => {
          return page.number === "3"
            ? {
                number: "3",
                placeholder: "Blog",
                content: <Blog />,
                name: "blog",
              }
            : page
        })
      )
  }, [face])
  return content
}

export default usePageMapper

// DOCUMENTATION

// This hook is meant to work in-flight during page transitions and check whether someone wants to navigate to the blog page
// if yes, it replaced the portfolio content with blog content
// if no, the returns the standard content array as defined in Content file
