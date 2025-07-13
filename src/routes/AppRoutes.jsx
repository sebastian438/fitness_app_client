import { Route, Routes } from 'react-router'
import { HomePage, LoginPage } from '../pages/public'
import { HomeAdminPage, RegistroPage, UpdateUserPage } from '../pages/admin'
import { ClasesPage } from '../pages/admin/ClasesPage'
import { ClasesCreatePage } from '../pages/admin/ClasesCreatePage'
import { ClasesUpdatePage } from '../pages/admin/ClasesUpdatePage'

export const AppRoutes = () => {
    return (
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
    )
}
