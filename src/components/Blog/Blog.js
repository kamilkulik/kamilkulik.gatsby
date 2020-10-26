import React from "react"
import { Helmet } from "react-helmet"
import ModeSwitch from "../ModeSwitch/ModeSwitch"
import LargeContent from "./LargeContent"

const Blog = () => {
  return (
    <section className="blog">
      <Helmet>
        <title>Blog Page</title>
        <link rel="canonical" href="https://kamilkulik.com" />
      </Helmet>
      <ModeSwitch />
      <LargeContent />
    </section>
  )
}

export default Blog
