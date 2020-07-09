import React, { useState } from "react"

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  // const [alert, setAlert] = useState({
  //   nameAlert: false,
  //   emailAlert: false,
  //   messageAlert: false,
  // })

  const handleChange = name => e => {
    const value = e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const emptyFields = () => {
    const keyValue = Object.entries(inputs)
    let emptyFieldsArray = []
    for (const [key, value] of keyValue) {
      if (!value) emptyFieldsArray.push(key)
    }
    return emptyFieldsArray
  }

  const validateInputs = () => {
    const messages = [
      ["name", "Please enter your name"],
      ["email", "Please enter your email"],
      ["message", "Please enter a message"],
    ]
    const empties = emptyFields()
    if (empties.length > 0) {
      empties.map(emptyField => {
        const message = messages.find(el => el[0] === emptyField)[1]
        console.log(message)
      })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    validateInputs()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={inputs.Name}
          onChange={handleChange("name")}
        />
      </label>
      <label>
        email
        <input
          type="text"
          value={inputs.email}
          onChange={handleChange("email")}
        />
      </label>
      <label>
        Message
        <textarea
          type="text"
          value={inputs.Message}
          onChange={handleChange("message")}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ContactForm
