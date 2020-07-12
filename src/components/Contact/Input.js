import React, { useReducer } from "react"
import { CSSTransition } from "react-transition-group"

function validate({ text, required, email, min, max, minLength, maxLength }) {
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
  if (maxLength != null && text.length == maxLength) {
    isValid = false
    error = `Please keep your message under ${maxLength} characters`
  }

  return [isValid, error]
}

const reducer = (state, action) => {
  switch (action.type) {
    case "setValue":
      return { ...state, value: action.value }
    case "touched":
      return { ...state, touched: true }
    case "error":
      return { ...state, error: action.message }
    case "clearError":
      return { ...state, error: "" }
    case "isValid":
      return { ...state, isValid: false }
    default:
      return { ...state }
  }
}

const Input = ({
  attribute,
  type,
  email,
  name,
  label,
  placeholder,
  min,
  max,
  minLength,
  maxLength,
  required,
  setValue,
}) => {
  const initialState = {
    value: "",
    touched: false,
    error: "",
    isValid: true,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = e => {
    const value = e.target.value
    if (state.error) {
      dispatch({ type: "clearError" })
    }
    dispatch({ type: "setValue", value: value })
  }

  const handleBlur = () => {
    const validationInput = {
      text: state.value,
      required,
      email,
      min,
      max,
      minLength,
      maxLength,
    }
    const validationResponse = validate(validationInput)
    if (!validationResponse[0]) dispatch({ type: "isValid" })
    if (!!validationResponse[1])
      dispatch({ type: "error", message: validationResponse[1] })
    if (validationResponse[0]) setValue(name, state.value)
  }

  return (
    <div className="input">
      <CSSTransition
        in={!!state.error}
        classNames="errorFloat"
        timeout={{
          enter: 500,
          exit: 5000,
        }}
        unmountOnExit
      >
        <p className="input__error">{state.error}</p>
      </CSSTransition>
      {attribute === "textarea" ? (
        <textarea
          type={type}
          value={state.value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          className="input__textarea"
        />
      ) : (
        <input
          type={type}
          value={state.value}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          maxLength={maxLength}
          className="input__input"
        />
      )}
      <label className="input__label">{label}</label>
    </div>
  )
}

export default Input

// validation on blur
// add focus on form mount
