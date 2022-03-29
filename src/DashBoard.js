import React,{useEffect,useState} from 'react'
import './DashBoard.css'
import db,{auth} from './firebase'
import firebase from 'firebase'

function DashBoard({mail}) {
    const [details,setDetails] = useState({})
    const [email,setEmail] = useState('')
    useEffect(() => {
            // setEmail(mail)
            db.collection('users').doc(mail).onSnapshot(snapshot=>{
                setDetails(snapshot.data());
            })
    }, [mail])
    const logout=()=>{
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='DashBoard'>
        <div className='DashBoard__details'>
            <div className='DashBoard__head'>
                <img src="http://cdn.onlinewebfonts.com/svg/img_206976.png"/>
                <p>{details?.name}</p>
            </div>
            <hr></hr>
            <div className='Dashboard__center' >
                <table >
                  <tr>
                      <td className='DashBoard__left'>Email :</td>
                      <td className='DashBoard__right'>{mail}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>Phone :</td>
                      <td className='DashBoard__right'>{details?.phone}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>Sex :</td>
                      <td className='DashBoard__right'>{details?.gender}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>Age :</td>
                      <td className='DashBoard__right'>{details?.age}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>Address :</td>
                      <td className='DashBoard__right'>{details?.address}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>Blood Group :</td>
                      <td className='DashBoard__right'>{details?.blood}</td>
                  </tr>
                  <tr>
                      <td className='DashBoard__left'>By-stander  :</td>
                      <td className='DashBoard__right'>{details?.bystand}</td>
                  </tr>
                  
                </table>
                <button  className='Login__button' onClick={logout} >Logout</button>
                <br/>
                <br/>
                <button  className='Login__button' onClick={()=>document.location.href="/editprofile"} >EditProfile</button>

            </div>
            
            
            
        </div>
        
    </div>
  )
}

export default DashBoard