export const HomePage = () => {
  // Datos de ejemplo
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
    <div className="homepage">
      <section className="tarifas">
        <h2>Nuestras Tarifas</h2>
        <div className="tarifas-list">
          {tarifas.map(t => (
            <div key={t.id} className="tarifa-card">
              <h3>{t.nombre}</h3>
              <p className="precio">{t.precio}</p>
              <ul>
                {t.beneficios.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="clases">
        <h2>Clases Disponibles</h2>
        <div className="clases-list">
          {clases.map(c => (
            <div key={c.id} className="clase-card">
              <h3>{c.title}</h3>
              <p><strong>Horario:</strong> {c.horario}</p>
              <p>{c.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};