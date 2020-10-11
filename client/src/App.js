import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import NoMatch from "./pages/NoMatch";
import SignUpForm from "./components/SignUpForm"
import Login from "./components/Login"
import Nav from "./components/Nav";
import Cookies from 'js-cookie';

function App() {
const print = () => console.log(Cookies.get("connect-sid"))

print()

  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
