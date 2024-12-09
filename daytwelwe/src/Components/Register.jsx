import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const[name,Setname]=useState();
    const[email,Setemail]=useState();
    const[password,Setpassword]=useState();
    const data=  {name ,email, password}
  return (
    <div>
    {JSON.stringify(data)};
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text" onChange={(e)=>Setname(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email" onChange={(e)=>Setemail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>  
    </div>
  )
}

export default Register
