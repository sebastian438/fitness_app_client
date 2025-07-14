import { ClassCard } from './ClassCard' // Componente para renderizar cada clase individual
import { useClasesNew } from '../hooks/useClasesNew' // Hook para manejar la obtención y estado de clases
import { useEffect } from 'react'

export const CardGrid = () => {
    const { isLoading, data, getClases } = useClasesNew();

    // useEffect se ejecuta tras el primer render del componente
    useEffect(() => {
        // Invocamos la función que trae todas las clases del backend
        getClases();
    }, []); // El array vacío [] asegura que solo se ejecute en el montaje inicial

    // Si estamos esperando la respuesta, mostramos un spinner de carga
    if (isLoading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    // Si la petición falló (ok: false), mostramos un mensaje de error
    if (!data.ok) {
        return (
            <div className="alert alert-danger" role="alert">
                {data.error || 'Error al cargar las clases'}
            </div>
        );
    }

    // Si todo sale bien, iteramos sobre el array de clases
    return (
        <div className="row g-4">
            {data.datos.map(clase => (
                <div key={clase.class_id} className="col-12 col-md-6 col-lg-4">
                    <ClassCard clase={clase} />
                </div>
            ))}
        </div>
    );
};