import { useState } from 'react'
import { request } from "../../services/api";

export const useClasesNew = () => {
    // Estado para la respuesta de la API
    const [data, setData] = useState(null);
    // Estado para indicar si estamos cargando datos
    const [isLoading, setIsLoading] = useState(true)


    // Función para obtener todas las clases
    const getClases = async () => {
        setIsLoading(true) // Activamos el loading

        try {
            const resultados = await request('/clases/allclases', { // Llamamos a la API
                method: 'GET',
                credentials: 'include'
            });

            if (resultados.ok) {
                setData({ ok: true, datos: resultados.data }) // Guardamos la respuesta en data
                setIsLoading(false)  // Desactivamos el loading
            } else {
                setData({ ok: false, datos: resultados.errores })
                setIsLoading(false)
            }
        } catch (error) {
            setData({ ok: false, datos: error })
            setIsLoading(false)
        }
    };

    const getClaseByTitle = async (title) => {
        setIsLoading(true)
        try {
            const resultados = await request(`/clases/search/${title}`, {
                method: 'GET'
            });
            if (resultados.ok) {
                setData({ ok: true, datos: resultados.data })
                setIsLoading(false)
            } else {
                setData({ ok: false, datos: resultados.error })
                setIsLoading(false)
            }
        } catch (error) {
            setData({ ok: false, datos: error })
            setIsLoading(false)
        }
    }

    const editClase = async (formData) => {
        try {
            const titulo = ""
            const response = await request(`/clases/updateclass/${formData.class_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = { ok: true, datos: response.message };
                setData(result);
                return result;
            } else {
                const result = { ok: false, datos: response.errores };
                setData(result);
                return result;
            }
        } catch (error) {
            const result = { ok: false, datos: error };
            setData(result);
            return result;
        }
    }

    const createClase = async (formData) => {

        try {
            const response = await request(`/clases/createclass`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setData({ ok: true, datos: response.msg })
            } else {
                setData({ ok: false, datos: response.errores })
            }
        } catch (error) {
            setData({ ok: false, datos: error })
        }
    }

    const deleteClase = () => {

    }

    return {
        isLoading,
        data,

        getClases,
        getClaseByTitle,
        editClase,
        createClase,
        deleteClase,
    }
}
