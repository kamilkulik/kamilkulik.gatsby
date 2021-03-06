import React from "react"
import scss from "../../images/sass-icon.png"
import html5 from "../../images/html5-icon.png"
import css3 from "../../images/css3-icon.png"
import gatsby from "../../images/gatsbyjs-icon.png"
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

const Content = [
  {
    img: "Retrovania.png",
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
    links: ["https://github.com/kamilkulik/retrovania"],
  },
  {
    img: "Portfolio.png",
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
    links: [],
  },
  {
    img: "weselekulikow.png",
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
    links: [
      "https://weselekulikow.pl",
      "https://github.com/kamilkulik/weselekulikow.pl",
    ],
  },
  {
    img: "isItHealthy.png",
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
    links: ["https://github.com/kamilkulik/isItHealthy-FE"],
  },
  {
    img: "InvestmentFramework.png",
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
    links: [
      "https://investmentframework.com",
      "https://github.com/kamilkulik/investmentFramework",
    ],
  },
  {
    img: "Expensify.png",
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
    links: [
      "https://expensify-react-redux-kk.herokuapp.com/",
      "https://github.com/kamilkulik",
    ],
  },
  {
    img: "Natours.png",
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
    links: [
      "https://kamilkulik.github.io/natours/",
      "https://github.com/kamilkulik/Expensify",
    ],
  },
  {
    img: "AutoCheck24.png",
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
    links: ["https://www.auto-check24.pl"],
  },
]

export default Content
