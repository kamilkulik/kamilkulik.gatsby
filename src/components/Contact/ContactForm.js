import React, { useState, useReducer } from "react"

const initialState = {
  nameAlert: false,
  emailAlert: false,
  messageAlert: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "nameAlert":
      return { ...state, nameAlert: true }
    case "emailAlert":
      return { ...state, emailAlert: true }
    case "messageAlert":
      return { ...state, messageAlert: true }
    case "nameAlertDisable":
      return { ...state, nameAlert: false }
    case "emailAlertDisable":
      return { ...state, emailAlert: false }
    case "messageAlertDisable":
      return { ...state, messageAlert: false }
    default:
      return { ...state }
  }
}

const ContactForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const handleChange = name => e => {
    const value = e.target.value
    if (state.nameAlert || state.emailAlert || state.messageAlert) {
      const alertName = `${name}AlertDisable`
      dispatch({ type: alertName })
    }
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
    const empties = emptyFields()
    const regex = /\S+@\S+\.\S+/ // anystring@anystring.anystring
    if (empties.length > 0) {
      empties.forEach(emptyField => {
        dispatch({ type: `${emptyField}Alert` })
      })
    } else if (!regex.test(inputs.email)) {
      dispatch({ type: "emailAlert" })
    }
    // IMPLEMENT MAX TEXTAREA CHARACTERS
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
      {state.nameAlert && (
        <p style={{ color: "red" }}>Please enter your name</p>
      )}
      <label>
        email
        <input
          type="text"
          value={inputs.email}
          onChange={handleChange("email")}
        />
      </label>
      {state.emailAlert && (
        <p style={{ color: "red" }}>Please enter a valid email address</p>
      )}
      <label>
        Message
        <textarea
          type="text"
          value={inputs.Message}
          onChange={handleChange("message")}
          maxLength="1000"
        />
      </label>
      {state.messageAlert && (
        <p style={{ color: "red" }}>Please enter a message</p>
      )}
      <input type="submit" value="Submit" />
    </form>
  )
}

export default ContactForm
