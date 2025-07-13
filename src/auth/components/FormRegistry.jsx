import { useState } from "react";
import { request } from "../../services/api";
import { useFormRegistro } from "../hooks/useFormRegistro";

export const FormRegistry = () => {

    const { error, formData, handleChange, handleSubmit, isOk } = useFormRegistro()

    return (
        <>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <h2>Registrar Usuario</h2>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={formData.name}
                    onChange={handleChange}
                    name='name'
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    name='password'
                />
                <select
                    value={formData.role}
                    onChange={handleChange}
                    name='role'
                >
                    <option value="">Selecciona un rol</option>
                    <option value="2">Admin</option>
                    <option value="3">Usuario</option>
                </select>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name='email'
                />
                <button type="submit">Registrar</button>
            </form>

            {
                error && JSON.stringify(error)
            }
            {
                isOk && <p>{isOk}</p>
            }
        </>
    );
}
