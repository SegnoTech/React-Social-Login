import React, { useState } from 'react'  
import axios from 'axios';  
function Register(props) {  
  const [data, setdata] = useState({ email: '', password: '', cpassword: '', username: '', mobile: '' })  
  // const apiUrl = "http://127.0.0.1:8000/tsapi/v1/signup/";  
  const apiUrl = "https://testing.timestint.com/tsapi/v1/signup/";  
  const Registration = (e) => {  
    e.preventDefault();
  
    // debugger;  
    // const data1 = { Email: data.Email, Password: data.Password, EmployeeName: data.EmployeeName, City: data.City, Department: data.Department };  
    const data1 = { email: data.email, password: data.password, cpassword: data.cpassword, username: data.username, mobile: data.mobile, country:'', state:'',first_name: '',last_name:''};  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        // debugger;  
        console.log(result);  
        console.log(result.data);
        localStorage.setItem('myData', JSON.stringify(result.data));   
        if (result.data.status == 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {
    console.log(e, 'signup dataaaaaaaaaaa')

    e.persist();  
    // debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }
  
  return (  
    <div class="container">  
      <div class="row">  
        <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "margin-top": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="email" onChange={onChange} value={data.email} class="form-control" id="exampleFirstName" placeholder="email" />  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="text" name="username" onChange={onChange} value={data.username} class="form-control" id="exampleInputEmail" placeholder="username" />   
                    </div>  
                  </div>  
                  <div class="form-group row my-2"> 
                    <div class="col-sm-6">  
                      <input type="password" name="password" onChange={onChange} value={data.password} class="form-control" id="exampleLastpassword" placeholder="password" />  
                    </div>
                    <div class="col-sm-6">  
                      <input type="password" name="cpassword" onChange={onChange} value={data.cpassword} class="form-control" id="exampleLastCpassword" placeholder="confirm password" />  
                    </div>  
                     
                  </div>  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="number" name="mobile" onChange={onChange} value={data.mobile} class="form-control" id="exampleInputPassword" placeholder="mobile" />  
                    </div>  
                  </div>  
                  <button type="submit" class="btn btn-primary btn-block mt-2">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Register 