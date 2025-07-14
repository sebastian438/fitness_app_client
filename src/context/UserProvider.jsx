import { useState } from 'react'
import { UserContext } from './UserContext'

// Al ser un high order component recibe los children como argumento
export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}