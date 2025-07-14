// Importamos useState para gestionar estado en nuestro hook
import { useContext, useState } from 'react'
// Función genérica de fetch para llamar a la API
import { request } from '../../services/api'
import { UserContext } from '../../context/UserContext'

// Definimos y exportamos el hook custom useUsers
export const useUsers = () => {
    // Estado para guardar los datos del usuario tras el login
    const [data, setData] = useState(null)
    // Estado para guardar cualquier mensaje de error
    const [error, setError] = useState(null)
    // Estado para mensajes de éxito (registro o login correcto)
    const [isOk, setIsOk] = useState(null)
    const { setUser } = useContext(UserContext)

    const login = async (credentials) => {

        try {
            // Enviamos POST a /auth con las credenciales
            //    credentials: { email, password }
            const response = await request(`/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
                credentials: "include" // Incluimos cookies (JWT httpOnly)
            })
            // Si la API responde con ok: true
            if (response.ok) {
                // Guardamos el usuario (o token) en data
                setData(response)
                console.log('response', response)
                setUser(response.user)
                // Guardamos mensaje de éxito
                setIsOk(response.message)
                // Limpiamos cualquier error previo
                setError(null)
                console.log('[useUsers] setUser con:', response.user)
            } else {
                // En caso de fallo, limpiamos data e isOk
                setData(null)
                setIsOk(null)
                // Guardamos el mensaje de error desde la respuesta
                setError(response.error || response.message)
            }
        } catch (err) {
            // Si fetch lanza excepción, limpiamos data y guardamos el error
            setData(null)
            setError(err.message || err)
        }
    }

    const registro = async (formData) => {
        try {
            // Enviamos POST a /auth/signup con los datos del formulario
            const response = await request(`/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            // Si la API responde con ok: true
            if (response.ok) {
                // Guardamos mensaje de éxito
                setIsOk(response.message)
                // Limpiamos posibles errores previos
                setError(null)
            } else {
                // En caso de fallo, limpiamos isOk
                setIsOk(null)
                // Guardamos el mensaje de error
                setError(response.message)
            }
        } catch (error) {
            // Si ocurre excepción. guardamos error
            setError(error)
        }
    }

    // Exportamos los estados y funciones para usar en componentes
    return {

        data,
        error,
        isOk,

        registro,
        login

    }
}
