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
        const result = await editClase(formData);     // <-- esperamos la respuesta
        if (result.ok) {
            setTimeout(() => navigate('/admin/clases'), 700);
        }
    };

    return (
        <>
            <h2>Formulario de actualizar clase de {formData.title}</h2>
            {data?.ok && <p className="exito">{data.datos}</p>}

            {(data && !data.ok) && Object.values(data.datos).map((error, index) => {
                return <p key={`error${index + 1}`} className="fracaso">
                    {error.msg}
                </p>
            })

            }

            <form onSubmit={handleSubmit} noValidate>
                <h2>Actualizar clase</h2>
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
                <button type="submit">Actualizar clase</button>
            </form>
        </>
    )
}
