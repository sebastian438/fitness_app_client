import { useState } from 'react'
import { UserContext } from './UserContext'
import Cookies from 'js-cookie'
import { request } from '../services/api'

export const UserProvider = ({ children }) => {
    // Arrancamos sin usuario
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const logout = async () => {
        try {
            await request('/api/v1/auth/logout', {
                method: 'POST',
                credentials: 'include'
            })
        } catch (err) {
            console.error(err)
        }
        // Limpia cookies accesibles
        Cookies.remove('user_id')
        Cookies.remove('role')
        // Limpia contexto
        setUser({})
        setIsAuthenticated(false)
    }

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
            {children}
        </UserContext.Provider>
    )
}