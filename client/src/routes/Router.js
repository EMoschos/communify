import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Account from "../pages/Account";
import NoMatch from "../pages/NoMatch";
import SignUpForm from "../components/SignUpForm"
import Login from "../components/Login"
import Auth from "../routes/Auth"

function Router(props) {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/signup" component={SignUpForm} />
                <PrivateRoute exact path="/account" component={Account} />
                <Route exact path="/login" component={Login} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    );
}

function PrivateRoute({ component: Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={props =>
                Auth.isUserAuthenticated() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login"
                            }}
                        />
                    )
            }
        />
    );
}

export default Router;