import React, { useState, useEffect } from 'react'   
import axios from 'axios'; 

function Login(props) {  
  const [employee, setemployee] = useState({ username: '', password: ''});  
  // const apiUrl = "http://127.0.0.1:8000/tsapi/v1/login/";
  const apiUrl = "https://testing.timestint.com/tsapi/v1/login/";
  const Login = (e) => {    
    e.preventDefault();    
    // debugger;   
    const data = { username:employee.username, password: employee.password };    
    console.log(data, 'login dataaaaaaaaa')
    axios.post(apiUrl, data)    
    .then((result) => {    
        // debugger;  
        console.log(result.data);   
        // const serializedState = JSON.stringify(result.data);  
        localStorage.setItem('myData', JSON.stringify(result.data)); 
        const user =result.data;  
        if (user)    
          props.history.push('/Dashboard')    
        else    
          alert('Invalid User');    
    })

    .catch((err) => {
        console.log(err.response.data.detail);
        alert(err.response.data.detail);  
    })       
  };    
          
  const onChange = (e) => {    
    e.persist();    
    // debugger;    
    setemployee({...employee, [e.target.name]: e.target.value});    
  }    
  return (  
      
      <div class="container">  
      <div class="row justify-content-center">  
        <div class="col-xl-10 col-lg-12 col-md-9">  
          <div class="card o-hidden border-0 shadow-lg my-5">  
            <div class="card-body p-0">  
              <div class="row">  
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>  
                <div class="col-lg-6">  
                  <div class="p-5">  
                    <div class="text-center">  
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>  
                    </div>  
                    <form onSubmit={Login} class="user">  
                      <div class="form-group">  
                        <input type="text" class="form-control" value={employee.username} onChange={ onChange }  name="username" id="username" aria-describedby="emailHelp" placeholder="Enter Username"/>  
                      </div>  
                      <div class="form-group">  
                        <input type="password" class="form-control" value={employee.password} onChange={ onChange }  name="password" id="DepPasswordartment" placeholder="Password"/>  
                      </div>  
                       
                      <button type="submit" class="btn btn-info mb-1"><span>Login</span></button>    
                      <hr/>  
                    </form>  
                    <hr/>  
                  </div>  
                </div>  
              </div>  
            </div>  
          </div>  
         </div>  
        </div>  
      </div>  
  )  
}  
  
export default Login