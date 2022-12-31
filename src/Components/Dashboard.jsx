import React from 'react'

export const Dashboard = ({state}) => {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div >
            <h3 data-testid = "token" >Token: {state?.token}</h3>
            <button data-testid = "logout" onClick={()=>{logout()}} >LOGOUT</button>
        </div>
    )
}
