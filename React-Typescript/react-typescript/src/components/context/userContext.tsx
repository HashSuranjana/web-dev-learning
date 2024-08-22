import { createContext, useState } from "react";
import { AuthUser } from "../props.type";

export const userContext = createContext<contexType | null> (null)

type userContextProvider = {
    children : React.ReactNode
}

type contexType = {
    user : AuthUser | null
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContextProvider = ({children}:userContextProvider) => {
    const [user, setUser] = useState<AuthUser | null> (null)

    return (
        <userContext.Provider value={{user,setUser}}>{children}</userContext.Provider>
    )

}