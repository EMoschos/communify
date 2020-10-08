import React, { useState } from "react";
import API from "../../utils/API"


function SignUpForm() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (state.email && state.password && state.firstName && state.lastName) {
      const userSignUp = {
        "email": state.email,
        "password": state.password,
        "firstName": state.firstName,
        "lastName": state.lastName
      }
      API.saveUser(userSignUp).then(res => {
        if (res.status === 200) {
          setState(prevState => ({
            ...prevState,
            'successMessage': 'Registration successful. Redirecting to home page..'
          }))
        } else {
          console.log("Some error ocurred");
        }
      })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('Please enter valid username and password')
    }

  }

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              placeholder="i.e. John"
              id="firstName"
              type="text"
              className="validate"
              value={state.firstName}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              placeholder="i.e. Smith"
              id="lastName"
              type="text"
              className="validate"
              value={state.lastName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="jsmith@email.com"
              id="email"
              type="email"
              className="validate"
              value={state.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="P@sSw0rd"
              id="password"
              type="password"
              className="validate"
              value={state.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleFormSubmit}>Submit
          <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
