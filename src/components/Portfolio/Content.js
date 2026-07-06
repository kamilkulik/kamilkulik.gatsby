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
import nextjs from "../../images/nextjs-icon.svg"
import prisma from "../../images/prisma-icon.svg"
import stripe from "../../images/stripe-icon.svg"
import twilio from "../../images/twilio-icon.svg"
import supabase from "../../images/supabase-icon.svg"

const Content = [
  {
    img: "evening_whisper.png",
    flag: "Evening_Whisper",
    title: "Evening_Whisper",
    alt: "Evening Whisper — a daily SMS service that stirs nostalgia",
    description: (
      <React.Fragment>
        <span>
          Evening Whisper is a subscription SMS service that delivers a single
          thoughtfully crafted message each day — short prose designed to stir
          nostalgia and spark emotion.
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: react, alt: "react icon" },
      { img: nextjs, alt: "next.js icon" },
      { img: node, alt: "node.js icon" },
      { img: prisma, alt: "prisma icon" },
      { img: stripe, alt: "stripe icon" },
      { img: twilio, alt: "twilio icon" },
    ],
    links: ["https://eve-nin-gwhi-sper.netlify.app"],
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
    links: ["https://we-sel-eku-lik-ow.netlify.app/"],
  },
  {
    img: "isItHealthy.png",
    flag: "isItHealthy",
    title: "isItHealthy",
    alt: "React Native image recognition app",
    description: (
      <React.Fragment>
        <span>
          Image recognition and machine learning, app could interpret pictures
          taken or selected from phone's library and tell if the food is healthy
          or not.
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: js, alt: "javascript icon" },
      { img: reactNative, alt: "react native icon" },
      { img: reactNavigation, alt: "react navigation icon" },
      { img: redux, alt: "redux icon" },
    ],
    links: [],
  },
  {
    img: "Retrovania.png",
    flag: "Retrovania",
    title: "Retrovania",
    alt: "e-Commerce site built during SoftServe's web development bootcamp",
    description: (
      <React.Fragment>
        <span>
          e-Commerce site for retro games. Fully responsive on every device.
          Node backend for form handling and email notifications. MongoDB for
          data persistance.
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
    links: [],
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
    links: [],
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
      </React.Fragment>
    ),
    technologies: [
      { img: html5, alt: "html5 icon" },
      { img: css3, alt: "css3 icon" },
      { img: scss, alt: "sass icon" },
    ],
    links: ["https://kamilkulik.github.io/natours/"],
  },
  {
    img: "AutoCheck24.png",
    flag: "AutoCheck24",
    title: "AutoCheck24",
    alt: "Commercial WiX project",
    description: (
      <React.Fragment>
        <span>
          Features home page, testimonials, about me and a contact form. The
          website advertises the service of detailed used car inspection,
          primarily before used car purchase.
        </span>
      </React.Fragment>
    ),
    technologies: [
      { img: nextjs, alt: "next.js icon" },
      { img: react, alt: "react icon" },
      { img: supabase, alt: "supabase icon" },
    ],
    links: ["https://www.auto-check24.pl"],
  },
]

export default Content
