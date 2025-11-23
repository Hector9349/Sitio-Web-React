export default function Home() {
  return (
    <div className="p-4">

      <div className="bg-primary text-light rounded p-5 mb-5">
        <h1 className="display-4 fw-bold">FOMO</h1>
        <p className="lead">
          FOMO significa Fear Of Missing Out que se traduce a el español como miedo a perderte algo por eso existimos para que no te pierdas nada.
        </p>

        <a href="/about" className="btn btn-light btn-lg me-2">Conócenos</a>
        <a href="/contact" className="btn btn-outline-light btn-lg">Contáctanos</a>
      </div>

      <h2 className="fw-bold mb-4">Nuestros Servicios</h2>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Noticias</h5>
              <p className="card-text">
                Las noticias mas importantes y recientes del mundo.
              </p>
              <button className="btn btn-primary">Ver más</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Redes sociales</h5>
              <p className="card-text">
                Nuestras redes sociales para que nos digas sobre que te gustaria ver.
              </p>
              <button className="btn btn-primary">Detalles</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">Pagina web</h5>
              <p className="card-text">
                Nuestra pagina web donde puedes encontrar cada noticia que publicamos.
              </p>
              <button className="btn btn-primary">Saber más</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light border rounded p-4 mt-4 shadow-sm">
        <h3 className="fw-bold">¿Por qué elegirnos?</h3>
        <p>
          Contamos con un equipo de profesionales apasionados por diferentes areas que se aseguran de que no te pierdas nada.
        </p>
      </div>

    </div>
  );
}

