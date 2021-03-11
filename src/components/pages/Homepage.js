import React, {useContext} from 'react'
import {myContext} from './Context'

export default function Homepage() {
  const context = useContext(myContext)
  console.log(context);
  return (
    <div>
      {
        context ? (<h3>Wellcome back {context.username}</h3>) : (<h1>Homepage,. login and benifit from our......</h1> )
      }
      
    </div>
  )
}
