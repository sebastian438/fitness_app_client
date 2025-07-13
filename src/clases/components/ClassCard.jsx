import { NavLink } from "react-router"

export const ClassCard = ({ clase }) => {
    return (
        <article>
            <h2>{clase.title}</h2>
            <p>{clase.descripcion}</p>
            <p>{clase.capacity}</p>
            <NavLink
                to={`updateclase/${clase.title}`}
                className={({ isActive }) => isActive ? 'activo' : ''}>
                Editar clase
            </NavLink>
        </article>
    )
}
