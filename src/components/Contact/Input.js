import React, { useReducer } from "react"

function validate({ text, required, email, min, max, minLength }) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let isValid = true
  let error = ""

  if (required && text.trim().length === 0) {
    isValid = false
    error = "This field is required"
  }
  if (email && !emailRegex.test(text.toLowerCase())) {
    isValid = false
    error = "Please enter valid email address"
  }
  if (min != null && +text < min) {
    isValid = false
    error = "Value is too small"
  }
  if (max != null && +text > max) {
    isValid = false
    error = "Value is too big"
  }
  if (minLength != null && text.length < minLength) {
    isValid = false
    error = `Value is too short, must have at least ${minLength} characters`
  }

  return [isValid, error]
}

const Input = ({ type, name, onChange, label, placeholder, initialValue }) => {
  const initialState = {
    value: initialValue,
    touched: false,
    error: "",
    isValid: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = e => {
    const value = e.target.value
    const name = e.target.name
    if (error) {
      const alertName = `${name}AlertDisable`
      dispatch({ type: alertName })
    }
    setInputs({ ...inputs, [name]: value })
  }

  return (
    <label>
      {label}
      <input
        type={type}
        value={state.value}
        name={name}
        onChange={handleChange}
        onBlur={validate}
        placeholder={placeholder}
      />
    </label>
  )
}

export default Input

// validation on blur
// add focus on form mount
