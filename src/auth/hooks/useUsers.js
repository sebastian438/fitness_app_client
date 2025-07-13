import { useState } from 'react'
import { request } from '../../services/api'

export const useUsers = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isOk, setIsOk] = useState(null)

    const login = async (credentials) => {
        try {
            const response = await request(`/auth`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
                credentials: "include"
            })

            if (response.ok) {
                setData(response.data)
                setIsOk(response.message)
                setError(null)
            } else {
                setData(null)
                setIsOk(null)
                setError(response.error || response.message)
            }
        } catch (err) {
            setData(null)
            setError(err.message || err)
        }
    }

    const registro = async (formData) => {
        try {
            const response = await request(`/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsOk(response.message)
                setError(null)
            } else {
                setIsOk(null)
                setError(response.message)
            }
        } catch (error) {
            setError(error)
        }
    }

    return {

        data,
        error,
        isOk,

        registro,
        login

    }
}
