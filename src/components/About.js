import React from 'react'
import Navbar from './Navbar'
import Login from './Login';

function About() {
  // var user = sessionStorage.getItem("user");
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if(isLoggedIn)
  {
  return (
    <>
    <Navbar/>
    <div><h1>This is about page</h1></div>
    </>
  )
  }
  else
  {
    return(<Login/>)
  }
}

export default About;