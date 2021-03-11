import React, {useContext} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Login from './components/pages/Login'
import NavBar from './components/pages/NavBar'
import Register from './components/pages/Register'
import './GlobalStyles.css'
import {myContext} from './components/pages/Context'


export default function App() {
  const userObject = useContext(myContext)
  console.log('userObject: ' + userObject)
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        {
          userObject ? null : (
           <> 
           <Route path='/login' component={Login}/>
           <Route path='/Registert' component={Register}/>
           </>
          )
        }
        
      </Switch>
    </Router>
  )
}
