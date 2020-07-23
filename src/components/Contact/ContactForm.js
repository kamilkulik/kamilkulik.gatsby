import React, { useState } from "react"
import Input from "./Input"

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
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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
      <input type="submit" value="Submit" className="form__submit" />
    </form>
  )
}

export default ContactForm