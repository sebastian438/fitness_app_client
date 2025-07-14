// Importamos StrictMode para aplicar comprobaciones extra en desarrollo
import { StrictMode } from 'react'
// Importamos createRoot para iniciar el renderizado en React
import { createRoot } from 'react-dom/client'
// Importamos los estilos globales de nuestra aplicación
import './index.css'
// Importamos el CSS de Bootstrap para disponer de su sistema de grids y utilidades
import 'bootstrap/dist/css/bootstrap.min.css'
//Importamos el bundle JS de Bootstrap (colapsado de navbar...)Incluye el JavaScript necesario para el comportamiento de componentes de Bootstrap como el menú hamburguesa
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Importamos el componente raíz de nuestra app
import App from './App.jsx'
// Importamos el router de React para controlar la navegación por URL
import { BrowserRouter } from 'react-router'

// Localiza el <div id="root"> en index.html, que es donde montaremos toda la aplicación React. 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
