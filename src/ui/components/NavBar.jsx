import { NavLink } from "react-router"
import './navBar.css';

export const NavBar = () => {
    return (
        // Navbar de Bootstrap con colapso en pantallas pequeñas
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                    FitnessApp
                </NavLink>
                {/* Botón hamburguesa que muestra/oculta el menú */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Ítems de navegación que se colapsan */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link${isActive ? ' activo' : ''}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/admin/registro"
                                className={({ isActive }) =>
                                    `nav-link${isActive ? ' activo' : ''}`
                                }
                            >
                                Registro
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `nav-link${isActive ? ' activo' : ''}`
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        {/*<li className="nav-item">
                            <NavLink
                                to="/actualizar/:id"
                                className={({ isActive }) =>
                                    `nav-link${isActive ? ' activo' : ''}`
                                }
                            >
                                Update user
                            </NavLink>
                        </li>*/}
                        <li className="nav-item">
                            <NavLink
                                to="/admin/clases"
                                className={({ isActive }) =>
                                    `nav-link${isActive ? ' activo' : ''}`
                                }
                            >
                                Clases
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
