import { NavLink } from "react-router"
import './navBar.css';

export const NavBar = () => {
    return (
        <nav className="mpal">
            <ul>
                <li><NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'activo' : ''}>
                    Home
                </NavLink></li>
                <li>
                    <NavLink
                        to='/admin/registro'
                        className={({ isActive }) => isActive ? 'activo' : ''}>
                        Registro
                    </NavLink>
                </li>
                <li> <NavLink
                    to='/login'
                    className={({ isActive }) => isActive ? 'activo' : ''}>
                    Login
                </NavLink></li>
                <li><NavLink
                    to='/actualizar/:id'
                    className={({ isActive }) => isActive ? 'activo' : ''}>
                    Update user
                </NavLink></li>
                <li><NavLink
                    to='admin/clases'
                    className={({ isActive }) => isActive ? 'activo' : ''}>
                    Clases
                </NavLink></li>
            </ul>





        </nav>
    )
}
