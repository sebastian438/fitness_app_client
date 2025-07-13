import { NavLink } from "react-router"

export const ClassCard = ({ clase }) => {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{clase.title}</h5>
                <p className="card-text text-muted flex-grow-1">{clase.descripcion}</p>
                <p className="mb-3">
                    <span className="badge bg-success">{clase.capacity} plazas</span>
                </p>
                <NavLink
                    to={`updateclase/${clase.title}`}
                    className="btn btn-outline-success mt-auto"
                >
                    Editar clase
                </NavLink>
            </div>
        </div>
    );
};