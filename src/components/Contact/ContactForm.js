import React, { useState } from "react"
import Input from "./Input"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })

  const setValue = (name, value) => {
    setInputs({ ...inputs, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": form.getAttribute("name"), ...inputs }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <Input
        type={"text"}
        name={"name"}
        label={"Your name"}
        placeholder={"Your name"}
        required={true}
        setValue={setValue}
      />
      <Input
        type={"text"}
        email={true}
        name={"email"}
        label={"Your email"}
        placeholder={"Your email"}
        required={true}
        setValue={setValue}
      />
      <Input
        attribute={"textarea"}
        type={"text"}
        name={"message"}
        label={"Your message"}
        placeholder={"Your message"}
        required={true}
        maxLength={1000}
        setValue={setValue}
      />
      <button type="submit" className="form__submit">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
