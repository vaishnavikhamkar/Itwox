import React,{useState} from 'react';
import "../css/signin.css";
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const SignIn = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loggedIn,setLogin]=useState(false);

    const dispatch=useDispatch();
    console.log("login:",loggedIn); 

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        setLogin(true);

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }));

        alert("Logged In");  
        console.log(loggedIn); 

        setEmail('');
        setName('');
        setPassword('');     
    }

    if(loggedIn){
        console.log("if:",loggedIn); 
        return <Navigate to="/dashboard"/>
    }
    else{
        

    
  return (
    <div>
        <h1>Sign In</h1>
        <div>
        <form className="signform" onSubmit={(e)=>handleSubmit(e)}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" id="name" className="form-control" placholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>

            <Link to="/"><button id="btn-home" className="btn btn-outline-primary">Home</button></Link>
        </form>
        </div>
    </div>
  )
  }
}

export default SignIn;
