import React, { useState } from "react";
import API from "../../utils/API"
import Auth from "../../routes/Auth"


function SignUpForm(props) {
  const [signUpUser, setSignUpUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setSignUpUser(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (signUpUser.email && signUpUser.password && signUpUser.firstName && signUpUser.lastName) {
      const userSignUp = {
        "email": signUpUser.email,
        "password": signUpUser.password,
        "firstName": signUpUser.firstName,
        "lastName": signUpUser.lastName
      }
      API.signUp(userSignUp).then(res => {
        console.log(res.data)
        if (res.status === 200) {
          setSignUpUser({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          })
          console.log("Successful Save of User")
          Auth.authenticateUser(res.data.email)
          window.location.replace("/Account");
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
              value={signUpUser.firstName}
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
              value={signUpUser.lastName}
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
              value={signUpUser.email}
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
              value={signUpUser.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={handleSignUp}>Submit
          <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
