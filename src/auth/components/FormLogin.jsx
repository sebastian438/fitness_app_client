import { useFormLogin } from '../hooks/useFormLogin'

export const FormLogin = () => {
    const { formData, handleChange, handleSubmit, error, isOk } = useFormLogin()

    return (
        <>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <h2>Iniciar Sesión</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Entrar</button>
            </form>

            {isOk && <p className="success">{isOk}</p>}
            {error && <p className="error">{error}</p>}
        </>
    )
}