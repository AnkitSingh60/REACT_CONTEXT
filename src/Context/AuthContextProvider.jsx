import axios from "axios";
import React, { createContext, useState } from "react";

export const AppAuthContext = createContext();

export default function AuthContextProvider({children}) {
  
  const [state, setState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });
  
  const onLogin = (e, emailPass) => {
    e.preventDefault();
    
    axios.post("https://reqres.in/api/login",emailPass).then((result)=>{
      if(result?.status == 200) {
        setState({...state, isAuth: true, token : result?.data?.token} )
        localStorage.setItem("token",JSON.stringify(result?.data?.token))
      }
    })
  }
  // console.log('state:', state)    

  

  return <AppAuthContext.Provider value={{onLogin, state}}>
    {children}
  </AppAuthContext.Provider>;
}

