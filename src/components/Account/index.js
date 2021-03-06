import React from 'react'
 
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import { AuthUserContext, withAuthorization } from '../Session'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email.split('@', 1)}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
)
 
const condition = authUser => !!authUser
 
export default withAuthorization(condition)(AccountPage)