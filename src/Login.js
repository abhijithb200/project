import React, { useState } from 'react'
import './Login.css'
import db,{auth} from './firebase'
import firebase from 'firebase'
import { Redirect } from 'react-router-dom';

function Login({status}) {
    const [stat,setStat] = useState(status)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
const login=()=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}
    const signup=()=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
   alert('Created')
    document.location.href = '/editprofile'
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    }

  return (
    <div className='Login'>
         
    <div className="container" id="container">
      
        <div className="form-container sign-in-container" id="check">
        {
            stat=="login" && <div className='Login__form'>
            <h1>Login</h1>
            <div className="social-container">
            </div>
            <span>Enter your email and password to login</span>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} className='Login__input' placeholder="Email"  />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='Login__input' placeholder="Password"   />
            <button  className='Login__button' onClick={login}>Login</button>
            <br/>
            <p>No Account?</p>
            <br/>
            <button  className='Login__button' onClick={()=>setStat("signup")} >Create an Account</button>

        </div>
        }
        {
            stat=="signup" && <div className='Login__form'>
            <h1>Signup</h1>
            <div className="social-container">
            </div>
            <span>Enter your email and password to signup</span>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} className='Login__input' placeholder="Email"  />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} className='Login__input' placeholder="Password"   />
            <button  className='Login__button' onClick={signup} >Signup</button>
            <br/>
            <p>Already a member?</p>
            <br/>
            <button  className='Login__button' onClick={()=>setStat("login")} >Login</button>
        </div>
        }
           
       </div>
       <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1 className='Login__h1'>Welcome Back</h1>
                    <p className='Login__p'></p>
                </div>
            </div>
        </div>
       </div>
       </div>
       
  )
}

export default Login