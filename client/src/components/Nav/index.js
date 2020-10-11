import React from "react";
import M from 'materialize-css'
import API from "../../utils/API"

function Nav() {

  const handleLogOut = (e) => {
    e.preventDefault()
    console.log("logout")
      API.logOut()
  }

  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/signup">Signup</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/logout" onClick={handleLogOut}>LogOut</a></li>
            <li><a href="collapsible.html">No Match</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li><a href="/signup">Signup</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/logout" onClick={handleLogOut}>LogOut</a></li>
        <li><a href="collapsible.html">No Match</a></li>
      </ul>
    </header>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

export default Nav;
