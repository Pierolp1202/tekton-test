import React from 'react'
// import Button from './Button';
import Dashboard from './Dashboard';
import {Redirect} from 'react-router-dom';
import { useHistory } from 'react-router-dom'

const Login = () => {

    let history = useHistory();


    return (
        <div className="wrapper">
            <div className="container">
            <h1 className="loginTitle">Sistema de Asistencia</h1>
            <form>      
                <label className="label">
                    <p>User</p>
                    <input name="user" />
                </label>
                <label className="label" >
                    <p>Password</p>
                    <input type="password" name="pass" />
                </label>
                <br/>
                <button className="buttonForm" onClick={() => {history.push("/dashboard")}}>Submit</button>         
            </form>
      </div>
        </div>

        
        
    )
}

export default Login;
