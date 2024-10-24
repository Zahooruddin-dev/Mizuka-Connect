import React, { useState } from "react";
import { auth } from "../../firebase/Firebase";
export default function Login(){
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const handleLogin = async (e) =>{
    e.preventDefault()
    try{
      await auth.signInWithEmailAndPassword(email,password)
      alert('logged')
    }
  }
}