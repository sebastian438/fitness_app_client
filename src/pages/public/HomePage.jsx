export const HomePage = () => {
  const tarifas = [
    { id: 1, nombre: 'Mensual', precio: '30€ / mes', beneficios: ['Acceso ilimitado', '1 clase gratis'] },
    { id: 2, nombre: 'Trimestral', precio: '80€ / 3 meses', beneficios: ['Acceso ilimitado', '3 clases gratis'] },
    { id: 3, nombre: 'Anual', precio: '300€ / año', beneficios: ['Acceso ilimitado', 'Clases ilimitadas', 'Merchandising'] },
  ];

  const clases = [
    { id: 1, title: 'Yoga', horario: 'Lunes 18:00', descripcion: 'Mejora tu flexibilidad y reduce estrés.' },
    { id: 2, title: 'HIIT', horario: 'Miércoles 19:00', descripcion: 'Entrenamientos intensos para quemar grasa rápido.' },
    { id: 3, title: 'Spinning', horario: 'Viernes 17:00', descripcion: 'Clase en bicicleta estática con música enérgica.' },
    { id: 4, title: 'Pilates', horario: 'Martes 10:00', descripcion: 'Fortalece tu core y mejora tu postura.' },
  ];

  return (
    <div className="container py-5">
      {/* Tarifas */}
      <h2 className="text-center mb-4">Nuestras Tarifas</h2>
      <div className="row gy-4">
        {tarifas.map(t => (
          <div key={t.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{t.nombre}</h5>
                <h6 className="card-subtitle mb-3 text-success">{t.precio}</h6>
                <ul className="list-unstyled flex-grow-1">
                  {t.beneficios.map((b, i) => <li key={i}>• {b}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clases */}
      <h2 className="text-center my-5">Clases Disponibles</h2>
      <div className="row gy-4">
        {clases.map(c => (
          <div key={c.id} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{c.title}</h5>
                <p className="card-text"><strong>Horario:</strong> {c.horario}</p>
                <p className="card-text">{c.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
