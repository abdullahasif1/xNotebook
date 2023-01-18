import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    
    const navigate = useNavigate();
    const handleSubmit = async (e)=> {
        e.preventDefault();        
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
          });

          const json = await response.json();
          console.log(json);
          if(json.success){
            //save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Account created successfully", "success");
          }
          else{
            props.showAlert("Invalid Details", "danger")
          }
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={onChange}/>
                 </div>
                <div className="form-group my-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" onChange={onChange} minLength={5} required/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup
