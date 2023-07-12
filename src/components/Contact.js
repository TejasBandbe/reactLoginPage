import React from 'react'
import Navbar from './Navbar'
import Login from './Login';

function Contact() {
  // var user = sessionStorage.getItem("user");
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if(isLoggedIn)
    {
  return (
    <>
    <Navbar/>
    <div><h1>This is contact page</h1></div>
    </>
  )
    }
    else
    {
      return(<Login/>)
    }
}

export default Contact;