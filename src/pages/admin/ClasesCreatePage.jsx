import { FormCreateClase } from '../../clases/components/FormCreateClase'

export const ClasesCreatePage = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h1 className="h3 text-center mb-4">Añadir Clase</h1>
                    <FormCreateClase />
                </div>
            </div>
        </div>
    );
};
