import React, { useState } from "react";
import API from "../../utils/API"


function LoginForm(props) {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { id, value } = e.target
    setLoginUser(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (loginUser.email && loginUser.password) {
      const userLogin = {
        "email": loginUser.email,
        "password": loginUser.password
      }
      API.login(userLogin).then(res => {
        console.log(res.data)
        if (res.status === 200) {
          setLoginUser({
            email: "",
            password: ""
          })
          console.log("Login of User")
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
          <div className="input-field col s12">
            <input
              placeholder="jsmith@email.com"
              id="email"
              type="email"
              className="validate"
              value={loginUser.email}
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
              value={loginUser.password}
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

export default LoginForm;
