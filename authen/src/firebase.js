import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,getAuth,onAuthStateChanged} from "firebase/auth"
import { useEffect,useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyCYYiIunI-fPFw0cDS-yY_rvFCsrAT5QDE",
  authDomain: "authentication-d402b.firebaseapp.com",
  projectId: "authentication-d402b",
  storageBucket: "authentication-d402b.appspot.com",
  messagingSenderId: "199804626114",
  appId: "1:199804626114:web:30ef24f93f8ac4a17f475b",
  measurementId: "G-RX0MJ2EZ9X"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth()

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

export function login(email,password){
    return signInWithEmailAndPassword(auth,email,password)
}

export function logout(){
    return signOut(auth)
}

export function useAuth(){
    const [currentUser,setCurrentUser]=useState()
    useEffect(()=>{
        const x=onAuthStateChanged(auth,user=>setCurrentUser(user))
        return x
    },[])
    return currentUser
}