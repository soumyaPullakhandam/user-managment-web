import React from 'react';
import {Route, Switch} from 'react-router';
import {Layout} from 'components/layout';
import SignIn from 'pages/sign-in';
import SignUp from 'pages/sign-up';
import CreatePassword from 'pages/create-password';
import Home from 'pages/home';
import NotFound from 'pages/not_found';
import Path from 'routes/path';
import {isAuthenticated} from "../utils/checkAuth";

/**
 * @component
 * Component: Routes Component
 * This component allows user to navigate from component to component
 */
const Routes = () => {
    let renderer = <Layout>
        <Switch>
            <Route exact path={Path.signIn} component={SignIn}/>
            <Route path={Path.signUp} component={SignUp}/>
            <Route path={Path.createUser} component={CreatePassword}/>
            <Route path={Path.home} component={Home}/>
            <Route path={Path.notFound}>
                <NotFound/>
            </Route>
        </Switch>
    </Layout>;

    return (
        <>
            {renderer}
        </>
    )
}
export default Routes;
