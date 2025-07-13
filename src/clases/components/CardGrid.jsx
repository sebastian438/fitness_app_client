import { ClassCard } from './ClassCard'
import { useClasesNew } from '../hooks/useClasesNew'
import { useEffect } from 'react'

export const CardGrid = () => {
    const { isLoading, data, getClases } = useClasesNew()

    useEffect(() => {
        getClases()
    }, [])

    return (
        <>
            <h2>CardGrid</h2>

            {
                isLoading
                    ? <h1>CARGANDO</h1>
                    : !data.ok
                        ? <p>{data}</p>

                        : data.datos.map(clase => (
                            <ClassCard key={clase.class_id} clase={clase} />
                        ))
            }
        </>
    )
}