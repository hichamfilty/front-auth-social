import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const myContext = createContext('')

export default function Context(props) {
 const [userObject, setUserObject] = useState('');
   
  useEffect(() => {
   axios.get('https://socialauthredo.herokuapp.com/getuser', {withCredentials: true}).then(res => {
     if(res.data){
       console.log('getUser: ' + res.data)
       setUserObject(res.data)
     }
   })
  }, []);
  return (
    <myContext.Provider value={userObject}>
      {props.children}
    </myContext.Provider>
  )
}
