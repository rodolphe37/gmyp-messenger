import { Button } from '@material-ui/core';
import React from 'react';
import './login.css';
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

export default function Login() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then(result => {
      console.log(result)
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className="login">
      <div className="login_container">
        <img src={require('../../assets/images/icon_slack.png')} alt='logo' />
        <h1>Sign in to My Slack</h1>
        <p>It's great!!</p>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  )
}
