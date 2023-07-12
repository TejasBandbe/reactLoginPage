import React from 'react';
import { Link,useLocation } from "react-router-dom";

function Navbar() {
let location = useLocation();
const clear = ()=>
{
  sessionStorage.clear("isLoggedIn");
  sessionStorage.clear("user");
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/home">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"?"active":""}`} aria-current="page" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact"?"active":""}`} to="/contact">Contact</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success mx-3" style={{color: "white"}} type="submit">Search</button>
                
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" style={{backgroundColor:"#121212", borderBlockColor:"#121212",marginRight: "70px"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="far fa-user-circle fa-lg mx-3" style={{fontSize: "40px", marginTop: "18px", color:"white"}}></i>
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Change password</a></li>
                  <li><a className="dropdown-item" href="/" onClick={clear}>Logout</a></li>
                </ul>
              </div>
                {/* <i className="far fa-user-circle fa-lg mx-3" style={{fontSize: "40px", marginTop: "18px", color:"white"}}></i> */}
            </form>
            
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar