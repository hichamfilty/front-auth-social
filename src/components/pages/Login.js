import React from 'react'
import googleImage from '../FormImages/googleimage.png'
import twitterImage from '../FormImages/twitterImage.png'
import githubImage from '../FormImages/githubImage.png'
import facebookImage from '../FormImages/facebookImage.png'
import '../FormStyles/Login.css'

export default function Login() {
  const googleLogin = () => {
   window.location.href = 'https://socialauthredo.herokuapp.com/auth/google'
  }
  const twitterLogin = () => {
    window.location.href = 'https://socialauthredo.herokuapp.com/auth/twitter'
  }
  const githubLogin = () => {
    window.location.href = 'https://socialauthredo.herokuapp.com/auth/github'
  }
  const facebookLogin = () => {
    window.location.href = 'https://socialauthredo.herokuapp.com/auth/facebook'
  }
  return (
    <div className='loginPage'>
      <h1>Login</h1>
      <div className="loginForm">
        <div className="googleContainer" onClick={googleLogin}>
            <img src={googleImage} alt="Google Icon"/>
            <p>Login with google</p>
        </div>
        <div className="twitterContainer googleContainer" onClick={twitterLogin}>
            <img src={twitterImage} alt="Twitter Icon"/>
            <p>Login with twitter</p>
        </div>
        <div className="githubContainer googleContainer" onClick={githubLogin}>
            <img src={githubImage} alt="Github Icon"/>
            <p>Login with github</p>
        </div>
        <div className='twitterContainer googleContainer' onClick={facebookLogin}>
        <img src={facebookImage} alt="Facebook Icon"/>
        <p>Login with facebook</p>
      </div>
      </div>
    </div>
  )
}
