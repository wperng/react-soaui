import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { Callback } from "../components/auth/callback";
import { Logout } from "../components/auth/logout";
import { PrivateRoute } from "./privateRoute";
import HomePage from "../components/HomePage";
import BookmarkPage from "../components/BookmarkPage";
import Covid19Page from "../components/Covid19Page";

export const Routes = (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={true} path="/bookmark" component={BookmarkPage} />
        <PrivateRoute exact={true} path="/covid19" component={Covid19Page} />        
        <Route exact={true} path="/callback" component={Callback} />
        <Route exact={true} path="/logout" component={Logout} />
    </Switch>
);
