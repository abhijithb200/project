import logo from './logo.svg';
// import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import Additional from './Additional.js';
import DashBoard from './DashBoard';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  const [email,setEmail]  = useState('')
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setEmail(user.email)
      
    } else {
      setEmail('')
    }
  });
  return (
    <div className="App">
      
      
      <Router>
         <Switch>
           <Route path="/editprofile">
           {
              email?.length>2 ? <Additional mail={email}/> :  <Login status="signup"/>
            }
           </Route>
           <Route path="/">
            {
              email?.length>2?  <DashBoard mail={email}/> : <Login status="signup"/>
            }
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
