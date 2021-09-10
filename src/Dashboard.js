import React, { useState, useEffect } from 'react'  
  
function Dashboard() {  
    const [user, setuser] = useState({'username':''});  
    useEffect(() => {  
        var a = localStorage.getItem('myData');  
        var b = JSON.parse(a);  
        console.log(b);
        console.log(b.username);
        setuser(b)  
        console.log(user)  
  
    }, []);  
    return (  
        <div>  
            <div class="col-sm-12 btn btn-primary">  
                Dashboard  
            </div>  
            
            <h1>Welcome :{user.username}</h1>  
        </div>  
    )  
}  
  
export default Dashboard 