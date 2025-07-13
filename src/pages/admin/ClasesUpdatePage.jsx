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
        <div className="container py-5">
            <h1 className="h3 text-center mb-4">Página de Editar clase</h1>

            {isLoading ? (
                <div className="text-center py-5">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            ) : data.ok ? (
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <FormUpdateClase data={data.datos} />
                    </div>
                </div>
            ) : (
                <p className="text-danger text-center">{data}</p>
            )}
        </div>
    );
};
