// Importamos el hook que centraliza la lógica de estado y envío del formulario de login
import { useFormLogin } from '../hooks/useFormLogin';

export const FormLogin = () => {
    // Desestructuramos del hook:
    // formData: objeto con { email, password }
    // handleChange: función para actualizar formData al escribir
    // handleSubmit: función que envía los datos al backend
    // error: mensaje de error (si lo hay)
    // isOk: mensaje de éxito (si lo hay)
    const { formData, handleChange, handleSubmit, error, isOk } = useFormLogin();

    // Renderizamos el formulario
    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="border rounded p-4 shadow-sm bg-white"
        >
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn-success w-100">Entrar</button>
            {/* Si hay isOk (éxito), mostramos el mensaje */}
            {isOk && (
                <div className="alert alert-success mt-3" role="alert">
                    {isOk}
                </div>
            )}
            {/* Si hay error, mostramos el mensaje */}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {error}
                </div>
            )}
        </form>
    );
};