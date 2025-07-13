import { CardGrid } from '../../clases/components/CardGrid'
import { NavLink } from "react-router"

export const ClasesPage = () => {
    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h3">Administrar Clases</h1>
                <NavLink to="createclase" className="btn btn-success">
                    Añadir Clase
                </NavLink>
            </div>

            <section>
                <CardGrid />
            </section>
        </div>
    );
};