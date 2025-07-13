import { useState } from 'react'
import { request } from '../../services/api';
import { useUsers } from './useUsers';

export const useFormRegistro = () => {
    const [formData, setFormData] = useState({ name: '', password: '', role: '', email: '' });

    const { data, error, isOk, registro } = useUsers()

    const vaciarInputs = () => {
        setFormData({ name: '', password: '', role: '', email: '' })
    }

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        const data = {
            ...formData,
            [name]: value
        }

        setFormData(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        registro(formData)
        vaciarInputs()

    };

    return {
        handleChange,
        handleSubmit,
        formData,
        error,
        isOk
    }
}
