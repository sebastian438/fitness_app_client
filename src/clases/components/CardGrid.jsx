import { ClassCard } from './ClassCard'
import { useClasesNew } from '../hooks/useClasesNew'
import { useEffect } from 'react'

export const CardGrid = () => {
    const { isLoading, data, getClases } = useClasesNew();

    useEffect(() => {
        getClases();
    }, []);

    if (isLoading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    if (!data.ok) {
        return (
            <div className="alert alert-danger" role="alert">
                {data.error || 'Error al cargar las clases'}
            </div>
        );
    }

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