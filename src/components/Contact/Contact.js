import React from "react"
import ContactForm from "./ContactForm"
import { Helmet } from "react-helmet"

const Contact = () => {
  return (
    <section className="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <ContactForm />
    </section>
  )
}

export default Contact
