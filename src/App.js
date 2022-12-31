import React, { useContext } from 'react'
import { Dashboard } from './Components/Dashboard';
import Login from './Components/Login'
import { AppAuthContext } from './Context/AuthContextProvider';

export default function App() {
  // const tokenData = localStorage.getItem("token");
  const {state} = useContext(AppAuthContext)

  return (
    <div>
      {
        state?.isAuth? <Dashboard state={state}/> :  <Login />
      }
       
    </div>
  )
}
