import React,{useState} from 'react'
import './Additional.css'
import db,{auth} from './firebase'
import firebase from 'firebase'

function Additional({mail}) {
  const [details,setDetails] = useState({})
  const detailHandler=(e)=>{
    const value = e.target.value
    setDetails({
      ...details,
      [e.target.name]:value
    })
    console.log(details)
  }
  const submit=()=>{
    
    if (mail.toString().length>1){
      db.collection('users').doc(mail).set(details).then(()=>{
        document.location.href="/"
      })
    }
  }

  return (
      <div className='Additional'>
    <div className='Additional__container'>
        <div className='Additional__form'>
            <h1 className='Additional__h1'>Add additional details</h1>
            <br/>
            <input type="text" name="name" onChange={detailHandler} className='Login__input' placeholder="Name"  />
            <input type="number" name="phone" onChange={detailHandler} className='Login__input' placeholder="Contact number"  />
            <div className="Login__option">
                <input type="radio" onChange={detailHandler}  value="Male" name="gender" /> Male
                
                <input type="radio" onChange={detailHandler} value="Female" name="gender" /> Female
                 <input type="radio" onChange={detailHandler} value="Other" name="gender" /> Other
            </div>
            <input type="area" name="address" onChange={detailHandler} className='Login__input' placeholder="Address"  />
            <select name="blood" onChange={detailHandler}  className='Login__input Login__select'>
                <option selected value="grapefruit">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option  value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <input type="number" name="age" onChange={detailHandler} className='Login__input' placeholder="Age"  />
            <input type="text" name="bystand" onChange={detailHandler} className='Login__input' placeholder="By-Stander name"  />
    
            <button  className='Login__button' onClick={submit} >Submit</button>

        </div>
    </div>
    </div>
  )
}

export default Additional