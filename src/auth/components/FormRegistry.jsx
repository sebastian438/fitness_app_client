// Importamos el hook que maneja la lógica del formulario de registro
import { useFormRegistro } from '../hooks/useFormRegistro';

export const FormRegistry = () => {
    // Desestructuramos del hook:
    // formData: { name, password, role, email }
    // handleChange: actualiza formData al escribir
    // handleSubmit: envía formData al backend
    // error: mensaje de error (si lo hay)
    // isOk: mensaje de éxito (si lo hay)
    const { error, formData, handleChange, handleSubmit, isOk } = useFormRegistro();

    // Renderizamos el formulario de registro
    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="border rounded p-4 shadow-sm bg-white"
        >
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre de usuario</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
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

            <div className="mb-3">
                <label htmlFor="role" className="form-label">Rol</label>
                <select
                    id="role"
                    name="role"
                    className="form-select"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un rol</option>
                    <option value="2">Admin</option>
                    <option value="3">Usuario</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
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

            <button type="submit" className="btn btn-success w-100">Registrar</button>
            {/* Si isOk existe, mensaje de éxito */}
            {isOk && (
                <div className="alert alert-success mt-3" role="alert">
                    {isOk}
                </div>
            )}
            {/* Si hay error, lo mostramos abajo */}
            {error && (
                <div className="alert alert-danger mt-3" role="alert">
                    {JSON.stringify(error)}
                </div>
            )}
        </form>
    );
};
