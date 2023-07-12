import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

function Register() {

    const history = useHistory();
    const [message, setMessage] = useState("");
    const handleSubmit = (event) =>
    {
        debugger;
        event.preventDefault();
        register();
    };

  const register = ()=>
    {
      debugger;
        var { uname, lname, email, email, mobile, pass } = document.forms[0];
        var record = {"first_name": uname.value,
                        "last_name": lname.value,
                        "email": email.value,
                        "password": pass.value,
                        "mobile": mobile.value
                    };
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>
        {
          debugger;
            if (helper.readyState === 4 && helper.status === 200 )
                {
                    var responseReceived = JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!== undefined 
                    && responseReceived.affectedRows>0)
                     {
                        console.log("Registered!!!");
                        history.push('/regpage');
                     }
                     else
                     {
                        setMessage("Something went wrong!");
                     }
                }
        };
        helper.open("POST", "http://localhost:9999/customer");
        helper.setRequestHeader("Content-Type", "application/json");
        helper.send(JSON.stringify(record));
    }

    const gotonextpage = ()=>
    {
        history.push('/regpage');
    }
debugger;
  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title"> <center>Register</center></div>
          <div className="form">
              {/* <form onSubmit={handleSubmit}> */}
              <form onSubmit={gotonextpage}>
              <div className="input-container">
                  <label>First Name</label>
                  <input type="text" name="uname" required />
                </div>
                <div className="input-container">
                  <label>Last Name</label>
                  <input type="text" name="lname" required />
                </div>
                <div className="input-container">
                  <label>Email Id</label>
                  <input type="email" name="email" required />
                </div>
                <div className="input-container">
                  <label>Mobile Number</label>
                  <input type="text" name="mobile" required />
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
                </div>
                <div className="button-container">
                  <input type="submit" value="Register"/>
                </div>
                <p className="forgot-password text-right my-3">
                   <a href="/"><center>Back to Login</center></a>
                </p>
              </form>
      </div>
      </div>
    </div>
  );
}

export default Register;