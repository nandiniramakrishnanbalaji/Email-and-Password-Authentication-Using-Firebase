import { async } from "@firebase/util";
import{useRef,useState} from "react";
import {signup,login,logout,useAuth} from "./firebase"

function App(){
  const[loading,setLoading]=useState(false)
  const currentUser=useAuth()
  const emailRef=useRef()
  const passwordRef=useRef()
  async function handleSignup(){
    setLoading(true)
    await signup(emailRef.current.value,passwordRef.current.value)
    setLoading(false)
  }
  async function handleLogin(){
    try{
      setLoading(true)
      await login(emailRef.current.value,passwordRef.current.value)
    }
    catch{
      alert("create account first")
    }
  }
  async function handleLogout(){
    setLoading(true)
    await logout()
  }
  return(
  <div>
    <center>
      <h4>Current User:{currentUser?.email}</h4>
    <label>Email</label>
    <input type="mail" ref={emailRef}placeholder="Enter Your mail"></input>
    <br/><br/>
    <label>Password</label>
    <input type="password" ref={passwordRef}placeholder="enter your password"/>
    <br/><br/>
    <button disabled={loading || currentUser} onClick={handleSignup}>sign up</button>
    <button disabled={loading || currentUser} onClick={handleLogin}>login</button>
    <button disabled={loading || !currentUser} onClick={handleLogout}>log out</button>
    </center>
   </div>

  ) 
  
}
export default App;