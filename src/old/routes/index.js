import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import loadable from "../../node_modules/loadable/component";

import Ad from "../pages/Ad"

const routes = [
  {
    path: '/',
    name: 'Main',
    component: loadable(() => import('../pages/Main'))
  },
  {
    path: '/create_ad',
    name: 'CreateAd',
    component: loadable(() => import('../pages/CreateAd'))
  },
  {
    path: '/ad/:id',
    name: 'Ad',
    component: Ad
  }
]

class RouterView extends Component {

  render() {
    return (
      <Router>
        <Switch>
          {
            routes.map((route, i) => {
              return <Route exact={route.name === 'Main'} path={route.path} component={route.component} key={i} />
            })
          }
          {/* <Route path="/ad/:id" component={Ad} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
export default RouterView;