import axios from 'axios';
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../FormStyles/NavBar.css'
import { myContext } from './Context';

export default function NavBar() {
  const context = useContext(myContext)
  console.log(context);

  const logout = () => {
    axios.get('https://socialauthredo.herokuapp.com/auth/logout', {
      withCredentials: true
    }).then(res => {
      if(res.status === 200) {
        window.location.href = '/'
      }
    })
  }
  return (
    <div className="navBarWrapper">
      <ul className='navBar'>
        <li><Link to='/'>Home</Link></li>
        {
          context ? (<li><Link to='/logout' onClick={logout}>Logout</Link></li>) : 
          (<>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
          </>)
        }
        
      </ul>
    </div>
  )
}
