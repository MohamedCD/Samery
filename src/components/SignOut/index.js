import React from 'react'
 
import { withFirebase } from '../Firebase'
 
const SignOutButton = ({ firebase }) => (
  <button id="logout" type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
)
 
export default withFirebase(SignOutButton)