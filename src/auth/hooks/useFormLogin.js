import { useState } from 'react'
import { useUsers } from './useUsers'

export const useFormLogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { data, error, isOk, login } = useUsers()

    const vaciarInputs = () => {
        setFormData({ email: '', password: '' })
    }

    const handleChange = ({ target }) => {
        const { name, value } = target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(formData)
        vaciarInputs()
    }

    return { formData, handleChange, handleSubmit, error, isOk, userData: data }
}