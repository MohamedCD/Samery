import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'
import Watched from '../Watched'
import Watchlist from '../Watchlist'
import Add from '../Add'


import { GlobalProvider } from '../../context/GlobalState'
import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session'

const App = () => (
  <GlobalProvider>
    <Router>
      <div>
        <Navigation />

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.WATCHED} component={Watched} />
        <Route exact path={ROUTES.WATCH_LIST} component={Watchlist} />
        <Route exact path={ROUTES.ADD} component={Add} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
  </GlobalProvider>
)

export default withAuthentication(App)
