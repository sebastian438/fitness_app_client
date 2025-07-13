import { FormLogin } from '../../auth/components/FormLogin'

export const LoginPage = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <h2 className="text-center mb-4">Formulario de Inicio de Sesión</h2>
                    <FormLogin />
                </div>
            </div>
        </div>
    );
};