import React, { useContext, useState } from "react";
import {AppAuthContext} from "../Context/AuthContextProvider"

export default function Login() {
    const {onLogin, state} = useContext(AppAuthContext)
    console.log('state:', state)

  const [emailPass, setEmailPass] = useState({
    email: "",
    password: ""
    
  });
  
  const submitHandler = async (e) => {
    const { id, value } = e.target;
    setEmailPass({...emailPass,[id]:value})
  };

  return (
    <div>
      <form data-testid="auth_form" onSubmit={(e) => onLogin(e,emailPass)}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          id="email"
          onChange={submitHandler}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          id="password"
          onChange={submitHandler}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
