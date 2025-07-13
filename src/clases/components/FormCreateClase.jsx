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
            {data?.ok && <p className="exito">{data.datos}</p>}

            {data && !data.ok && Object.values(data.datos).map((error, index) => {
                return <p key={`error${index + 1}`} className="fracaso">
                    {error.msg}
                </p>
            })

            }

            <form onSubmit={handleSubmit} noValidate>
                <h2>Crear una clase</h2>
                <input type="text"
                    placeholder="Nombre de la clase"
                    value={formData.title}
                    onChange={handleChange}
                    name='title' />
                <input type="text"
                    placeholder="Descripción de la clase"
                    value={formData.descripcion}
                    onChange={handleChange}
                    name='descripcion' />
                <input type="number"
                    placeholder="Capacidad de la clase"
                    value={formData.capacity}
                    onChange={handleChange}
                    name='capacity' />
                <button type="submit">Crear clase</button>
            </form>
        </>
    )
}
