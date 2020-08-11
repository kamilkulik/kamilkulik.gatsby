import React from "react"
import scss from "../../images/sass-icon.png"
import html5 from "../../images/html5-icon.png"
import css3 from "../../images/css3-icon.png"
import gatsby from "../../images/gatsby-icon.png"
import firebase from "../../images/firebase-icon.png"
import jest from "../../images/jest-icon.png"
import materialui from "../../images/materialui-icon.png"
import mongoDb from "../../images/mongoDb-icon.png"
import node from "../../images/nodejs-icon.png"
import react from "../../images/react-icon.png"
import reactRouter from "../../images/reactRouter-logo.png"
import reactNative from "../../images/react-native-icon.png"
import reactNavigation from "../../images/react-navigation-icon.svg"
import redux from "../../images/Redux-icon.png"
import js from "../../images/js-icon.png"
import wix from "../../images/wix-icon.png"
import Natours from "../../images/Natours.png"
import AutoCheck from "../../images/AutoCheck24.png"
import Weselekulikow from "../../images/weselekulikow.png"
import isItHealthy from "../../images/isItHealthy.png"
import Retrovania from "../../images/Retrovania.png"
import Expensify from "../../images/Expensify.png"
import Portfolio from "../../images/Portfolio.png"
import InvestmentFramework from "../../images/InvestmentFramework.png"
// import { useStaticQuery, graphql } from "gatsby"

// const data = useStaticQuery(graphql`
//   query {
//     file(relativePath: { eq: "../../images/project-natours.png" }) {
//       childImageSharp {
//         fluid {
//           base64
//           aspectRatio
//           src
//           srcSet
//           sizes
//         }
//       }
//     }
//   }
// `)

// const Image = ({ path, ...props }) => {
//   const graphqlQuery = useStaticQuery(graphql``)
//   return <Img />
// }

// ImgComponent: props => <Image path={"..."} {...props} />,

const Content = [
  {
    img: Retrovania,
    flag: "Retrovania",
    title: "Retrovania",
    alt: "e-Commerce site built during SoftServe's web development bootcamp",
    description: (
      <React.Fragment>
        <span>
          e-Commerce site for retro games built during SoftServe's web
          development bootcamp.
        </span>
        <br />
        <span>
          <b>Frontend:</b> React & Redux, React Router, Styled Components
        </span>
        <br />
        <span>
          <b>Backend:</b> Node, Express, Mongoose, Passport, Jest
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: react, alt: "react icon" },
      { img: redux, alt: "redux icon" },
      { img: reactRouter, alt: "react router icon" },
      { img: mongoDb, alt: "mongoDb icon" },
      { img: node, alt: "node icon" },
      { img: jest, alt: "jest" },
    ],
    links: ["https://www.auto-check24.pl", "http://github.com/kamilkulik"],
  },
  {
    img: Portfolio,
    flag: "Portfolio",
    title: "Portfolio",
    alt: "My Portfolio website",
    description: (
      <React.Fragment>
        <span>
          Gatsby Site, where every page is side of a cuboid. Using some clever
          SASS for creating and scaling that cuboid and random effects. Using
          React's conditional rendering to help performance. Fully responsive on
          every device.
        </span>
        <br />
        <span>
          <b>Stack:</b> React, Gatsby, SASS
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: scss, alt: "sass icon" },
      { img: js, alt: "javascript icon" },
      { img: react, alt: "react icon" },
      { img: gatsby, alt: "gatsby icon" },
    ],
    links: ["http://trillo.com", "http://github.com/kamilkulik"],
  },
  {
    img: Weselekulikow,
    flag: "Wesele_Kulikow",
    title: "Wesele_Kulikow",
    alt: "Website for my brother's wedding",
    description: (
      <React.Fragment>
        <span>
          React site for my brother's wedding using Google Maps API. Fully
          responsive on every device. Node backend for form handling and email
          notifications. MongoDB for storing confirmed guests.
        </span>
        <br />
        <span>
          <b>Frontend:</b> React, SASS,
        </span>
        <br />
        <span>
          <b>Backend:</b> Node, Express, Mailjet, MongoDB
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: scss, alt: "sass icon" },
      { img: js, alt: "javascript icon" },
      { img: react, alt: "react icon" },
      { img: reactRouter, alt: "react router icon" },
      { img: node, alt: "node icon" },
      { img: mongoDb, alt: "mongoDb icon" },
    ],
    links: ["http://weselekulikow.pl", "http://github.com/kamilkulik"],
  },
  {
    img: isItHealthy,
    flag: "isItHealthy",
    title: "isItHealthy",
    alt: "React Native image recognition app",
    description: (
      <React.Fragment>
        <span>
          React Native front end for a pair programming project. Thanks to image
          recognition and machine learning, app could interpret pictures taken
          or selected from phone's library.
        </span>
        <br />
        <span>
          <b>Frontend:</b> React Native, Redux, React Navigation
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: js, alt: "javascript icon" },
      { img: reactNative, alt: "react native icon" },
      { img: reactNavigation, alt: "react navigation icon" },
      { img: redux, alt: "redux icon" },
    ],
    links: ["https://www.auto-check24.pl", "http://github.com/kamilkulik"],
  },
  {
    img: InvestmentFramework,
    flag: "Investment_Framework",
    title: "Investment_Framework",
    alt: "Ongoing project for Investment Management",
    description: (
      <React.Fragment>
        <span>
          Ongoing development passion project for managing investments. The goal
          of the app is to allow user to quantitatively analyse assets, allocate
          funds to each asset selected and track investments.
        </span>
        <br />
        <span>
          <b>Frontend:</b> React Native, Redux, React Router, MaterialUI, Jest
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: scss, alt: "sass icon" },
      { img: js, alt: "javascript icon" },
      { img: react, alt: "react icon" },
      { img: redux, alt: "redux icon" },
      { img: reactRouter, alt: "react router icon" },
      { img: materialui, alt: "material ui icon" },
      { img: jest, alt: "jest" },
    ],
    links: ["https://www.auto-check24.pl", "http://github.com/kamilkulik"],
  },
  {
    img: Expensify,
    flag: "Expensify",
    title: "Expensify",
    alt: "React expense app with data persistance",
    description: (
      <React.Fragment>
        <span>
          Expense tracker app written in React. Login via Google. Expenses are
          written to firebase database. Filter by different fields.
        </span>
        <br />
        <span>
          <b>Stack:</b> SASS, React, Redux, React Router, Firebase, Jest
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: scss, alt: "sass icon" },
      { img: js, alt: "javascript icon" },
      { img: react, alt: "react icon" },
      { img: reactRouter, alt: "react router icon" },
      { img: redux, alt: "redux icon" },
      { img: firebase, alt: "firebase icon" },
      { img: jest, alt: "jest" },
    ],
    links: ["https://www.auto-check24.pl", "http://github.com/kamilkulik"],
  },
  {
    img: Natours,
    flag: "Natours",
    title: "Natours",
    alt: "Natours advanced SCSS project",
    description: (
      <React.Fragment>
        <span>
          Fully responsive web page for a tour operator. Beautiful design,
          styling of every element of the page.
        </span>
        <br />
        <span>
          <b>Stack:</b> HTML5, CSS, SASS
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: html5, alt: "html5 icon" },
      { img: css3, alt: "css3 icon" },
      { img: scss, alt: "sass icon" },
    ],
    links: ["http://natours.com", "http://github.com/kamilkulik"],
  },
  {
    img: AutoCheck,
    flag: "AutoCheck24",
    title: "AutoCheck24",
    alt: "Commercial WiX project",
    description: (
      <React.Fragment>
        <span>
          Commercial project in Wix. Features home page, testimonials, about me
          and a contact form. The website advertises the service of detailed
          used car inspection, primarily before used car purchase.
        </span>
        <br />
        <span>
          <b>Stack:</b> Wix
        </span>
      </React.Fragment>
    ),
    technologies: [{ img: wix, alt: "wix icon" }],
    links: ["https://www.auto-check24.pl", "http://github.com/kamilkulik"],
  },
]

export default Content
