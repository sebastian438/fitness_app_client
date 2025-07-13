import { useParams } from "react-router"
import { FormUpdateClase } from "../../clases/components/FormUpdateClase"
import { useClasesNew } from "../../clases/hooks/useClasesNew"
import { useEffect, useState } from "react";

export const ClasesUpdatePage = () => {
    //recogemos title del hook useParams (es mismo nombre que le hemos dado en la ruta)
    const { title } = useParams();
    const { getClaseByTitle, data, isLoading } = useClasesNew()

    const [formData, setFormData] = useState({
        titulo: title,

    })

    useEffect(() => {
        getClaseByTitle(title);

    }, [])

    return (
        <>
            <h1>Página de Editar clase</h1>
            {
                isLoading
                    ? <h1>CARGANDO</h1>
                    : data.ok
                        ? <FormUpdateClase data={data.datos} />

                        : <p>{data}</p>
            }

        </>
    )
}
