import { useState } from "react"
import { AuthUser } from "../props.type"

export const User  =()=>{

    const[user,setUser] = useState<AuthUser | null>(null)

    const handleSignIn =() =>{

        setUser (
            {
                name :'Hash',
                email :'hash@gmail.com'
            }
        )
        
    } 
    const handleSignout=() =>{

        setUser(null)

    } 

    let message 

    if (user === null ){
        message = "name : email"
    }else{
        message = user?.name+ " : " +user?.email
    }
    return (
        <div>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignout}>Sign out</button>
            <h2>{message}</h2>
        </div>
    )
}