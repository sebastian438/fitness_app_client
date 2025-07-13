import { useState } from "react";
import { useClasesNew } from "../hooks/useClasesNew";

export const FormCreateClase = () => {
    const [formData, setFormData] = useState({
        title: '',
        descripcion: '',
        capacity: ''
    });

    const { createClase, data } = useClasesNew()

    const vaciarInputs = () => {
        setFormData({ title: '', descripcion: '', capacity: '' })
    }

    const handleChange = ({ target }) => {

        const name = target.name;
        const value = target.value;
        const newData = {
            ...formData,
            [name]: value
        }

        setFormData(newData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        createClase(formData)
        vaciarInputs()
    };

    return (
        <>
            {data?.ok && (
                <div className="alert alert-success" role="alert">
                    {data.datos}
                </div>
            )}

            {data && !data.ok && data.datos && (
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
                <h2 className="h5 mb-4 text-center">Crear una Clase</h2>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Nombre de la clase</label>
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
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input
                        id="descripcion"
                        name="descripcion"
                        type="text"
                        className="form-control"
                        placeholder="Descripción de la clase"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="capacity" className="form-label">Capacidad</label>
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
                    Crear clase
                </button>
            </form>
        </>
    );
};