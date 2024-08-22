import { userContext } from "./userContext"
import { useContext } from "react"

export const Users =() => {
    const context = useContext(userContext)
    const handleLogIn = () => {
        if(context) {
            context.setUser(
                {
                    name : 'Hash',
                    email : 'hash@gmail.com'
                }
            )
        }
    }

    const handleLogOut = () => {

        if(context) {
            context.setUser(null)
        }

    }
    return (
        <div>
            <button onClick={handleLogIn}>Log in</button>
            <button onClick={handleLogOut}>Log Out</button>

            <div>
                <h2>User Name is : {context?.user?.name} </h2>
                <h2>User Email is : {context?.user?.email} </h2>
            </div>
        </div>
    )
}