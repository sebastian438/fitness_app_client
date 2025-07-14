// Importamos los componentes de React Router necesarios para definir rutas
import { Route, Routes } from 'react-router'
// Importamos las páginas públicas de nuestra aplicación
import { HomePage, LoginPage } from '../pages/public'
// Importamos las páginas de la sección de administración de usuarios
import { HomeAdminPage, RegistroPage, UpdateUserPage } from '../pages/admin'
// Importamos las páginas de gestión de clases en la sección admin
import { ClasesPage } from '../pages/admin/ClasesPage'
import { ClasesCreatePage } from '../pages/admin/ClasesCreatePage'
import { ClasesUpdatePage } from '../pages/admin/ClasesUpdatePage'
import { UserProvider } from '../context/UserProvider'
// El componente AppRoutes que agrupa todas las rutas de la app
export const AppRoutes = () => {
    return (
        <UserProvider>
            {/*<Routes> actúa como switch y renderiza la primera <Route> cuyo path coincida*/}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path="admin">
                    <Route index element={<HomeAdminPage />} />
                    <Route path="registro" element={<RegistroPage />} />
                    <Route path="actualizar/:id" element={<UpdateUserPage />} />
                    <Route path="clases">
                        <Route index element={<ClasesPage />} />
                        <Route path="createclase" element={<ClasesCreatePage />} />

                        {
                            /*En el path de la ruta definimos el parámetro 
                            (el nombre que le demos será el que reciba useParams) */
                        }
                        <Route path="updateclase/:title" element={<ClasesUpdatePage />} />
                    </Route>
                </Route>
            </Routes>
        </UserProvider>
    )
}
