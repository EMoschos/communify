import React, { useContext } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css'
import API from "../../utils/API"
import Auth from "../../routes/Auth"
import UserContext from "../../utils/UserContext"
import "./style.css";

function Nav() {

  const user = useContext(UserContext)
  console.log(user);

  const handleLogOut = (e) => {
    e.preventDefault()
    console.log("logout")
    API.logOut().then(res => {
      if (res.status === 200) {
        console.log("React Logout")
        Auth.deauthenticateUser()
        window.location.replace("/");
      } else {
        console.log("Some error ocurred");
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const isLoggedInBtns = () => {
    if (user) {
      return <>
        <li><Link to="/account">Account: {user.email}</Link></li>
        <li><Link to="/logout" onClick={handleLogOut}>LogOut</Link></li>
        </>
    } else {
      return <>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        </>
    }
  }

  return (
    <header>
      <nav className="blue" role="navigation">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Communify</a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {isLoggedInBtns()}
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        {isLoggedInBtns()}
      </ul>
    </header>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
});

export default Nav;
