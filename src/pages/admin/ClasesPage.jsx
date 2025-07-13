import { CardGrid } from '../../clases/components/CardGrid'
import { NavLink } from "react-router"

export const ClasesPage = () => {
    return (
        <>
            <h1>Administrar Clases</h1>
            <NavLink
                to='createclase'
                className={({ isActive }) => isActive ? 'activo' : ''}>
                Añadir clase
            </NavLink>
            <section>
                <CardGrid />
            </section>
        </>
    )
}
