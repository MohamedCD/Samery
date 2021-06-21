import React from 'react'
import { Link } from 'react-router-dom'

import logo from './logo.svg'

import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'

import { AuthUserContext } from '../Session'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
    </AuthUserContext.Consumer>
  </div>
)
 
const NavigationAuth  = () => (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">
              <img src={logo} className="App-logo" alt='logo'/> 
            </Link>
          </div>

          <ul>
            <li>
              <Link to={ROUTES.WATCH_LIST}>Watch List</Link>
            </li>
           
            <li>
              <Link to={ROUTES.WATCHED}>Watched</Link>
            </li>
           
            <li>
              <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>

            {/* 
            <li>
              <Link to={ROUTES.ADMIN}>Admin</Link>
            </li> 
            */}
            <li>
              <Link to={ROUTES.ADD} className="btn">+ Add</Link>
            </li>

            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      </div>
    </header>
)

const NavigationNonAuth = () => (
  <ul>
    <header>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </header>
  </ul>
  
)
 
export default Navigation