import { useState } from "react";
import { useClasesNew } from "../hooks/useClasesNew";
import { useNavigate } from 'react-router';

export const FormUpdateClase = ({ data: datos }) => {
    const navigate = useNavigate();
    const { editClase, data } = useClasesNew()

    const [formData, setFormData] = useState(datos);

    const handleChange = ({ target }) => {

        const name = target.name;
        const value = target.value;
        const newData = {
            ...formData,
            [name]: value
        }

        setFormData(newData)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const result = await editClase(formData);  
        if (result.ok) {
            setTimeout(() => navigate('/admin/clases'), 700);
        }
    };

    return (
        <>
            <h2 className="h5 text-center mb-4">
                Formulario de actualizar clase: {formData.title}
            </h2>

            {data?.ok && (
                <div className="alert alert-success" role="alert">
                    {data.datos}
                </div>
            )}

            {data && !data.ok && (
                <div className="alert alert-danger" role="alert">
                    {Object.values(data.datos).map((err, i) => (
                        <div key={i}>• {err.msg}</div>
                    ))}
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                noValidate
                className="border rounded p-4 shadow-sm bg-white"
            >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Nombre de la clase
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        className="form-control"
                        placeholder="Nombre de la clase"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form-control"
                        rows="3"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="capacity" className="form-label">
                        Capacidad
                    </label>
                    <input
                        id="capacity"
                        name="capacity"
                        type="number"
                        className="form-control"
                        placeholder="Capacidad de la clase"
                        value={formData.capacity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-success w-100">
                    Actualizar clase
                </button>
            </form>
        </>
    )
}
