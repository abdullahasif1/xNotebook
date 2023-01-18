import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    //let history = useHistory();
    const navigate = useNavigate();
     const handleSubmit = async (e)=> {
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });

          const json = await response.json();
          
          console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully", "success");
            navigate("/");
          }
          else{
            props.showAlert("Invalid Credentials", "danger")
          }
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control my-3" id="email" onChange={onChange} value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control my-3" id="password" onChange={onChange} value={credentials.password} name="password" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Login</button>
            </form>
        </div>
    )
}

export default Login
