import { useContext } from 'react'
import React from 'react'
import { UserContext } from "./App"

const UserProfile = (props) =>{
    
  return(  <>
<h1 id="name">Name:- {props.value.name}</h1>
<h1 id="age">Age:- e{props.value.age}</h1>
    </>
  )
}

export {UserProfile}