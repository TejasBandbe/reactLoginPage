import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Login() {
  const history = useHistory();
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    debugger;
    event.preventDefault();
    select();
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  const select = ()=>
    {
      debugger;
        var { uname, pass } = document.forms[0];
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>
        {
          debugger;
            if (helper.readyState == 4 && helper.status == 200 )
                {
                  debugger;
                    var result = JSON.parse(helper.responseText);
                    var username = result[0].first_name;
                    var password = result[0].password;
                     //setCredentials(result[0]);

                    // Find user login info
                    // const userData = database.find((user) => user.username === uname.value);

                    // Compare user info
                    if (username===uname.value) {
                      if (password !== pass.value) {
                        debugger;
                        // Invalid password
                        setErrorMessages({ name: "pass", message: errors.pass });
                      } else {
                        console.log("Logged in");
                        sessionStorage.setItem("user", username);
                        sessionStorage.setItem("isLoggedIn",true);
                        history.push('/home');
                      }
                    } else {
                      // Username not found
                      setErrorMessages({ name: "uname", message: errors.uname });
                    }
                }
        };
        helper.open("GET", "http://localhost:9999/customer/"+uname.value);
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send();
    }
debugger;
  return (
    
    <div className="app">
      <div className="login-form"> 
        <div className="title"> <center>Sign In</center> </div>
          <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="uname" required />
                  {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
                  {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                  <input type="submit" value="Login"/>
                </div>
                <center>
                <p className="forgot-password text-right my-3">
                  New User? <a href="/register">Register</a>
                </p>
                </center>
              </form>
      </div>
      </div>
    </div>
  );
}

export default Login;