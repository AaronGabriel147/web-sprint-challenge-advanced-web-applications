import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import styled from 'styled-components';

import Header from './Header';
import LambdaHeader from './LambdaHeader';
import View from './View';
import Login from './Login';
import Logout from './Logout';


// ### Basic Routing
// > *Build the needed utilities to restrict access to private routes.*
// * [x] Build a `Route` component that renders rendering `Login.js` to the path `/`.
// * [x] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
// * [x] Build a `Route` component that renders rendering `View.js` to the path `/view`.
// * [x] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.
// ______________ These 4 X's are: ____________________________
// <Switch>
// <Route exact path="/" component={Login} />
// <Route path="/login" component={Login} />
// <Route path="/view" component={View} />
// <Route path="/logout" component={Logout} />
// </Switch>


const App = () => {
  return (
    <AppContainer>
      <LambdaHeader />

      <Header />

      <RouteContainer>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/view" component={View} />
          <PrivateRoute exact path="/logout" component={Logout} />
        </Switch>

      </RouteContainer>
    </AppContainer>
  )
}

export default App;


//Task List
// [x] 1. Create and import PrivateRoute component.
// [x] 2. Create a Route for Login pointing to '/login.'
// [x] 3. Create a PrivateRoute for View component point to '/view.'
// [x] 4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
