import React from 'react'
import Navbar from './Navbar';
import Login from './Login';

function Home() {
  var user = sessionStorage.getItem("user");
  var isLoggedIn = sessionStorage.getItem("isLoggedIn");

  if(isLoggedIn)
  {
  return (
    <>
    <Navbar/>
    <div><h1>This is Home page</h1></div>
    <div>Welcome {user}</div>
    </>
  )
  }
  else
  {
    return(<Login/>)
  }
}

export default Home;