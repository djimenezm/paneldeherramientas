import { tools } from '@/lib/tools';

export default function DecisionGuide() {
  return (
    <section className="section alt" id="como-funciona" aria-labelledby="decision-guide-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Rutas rapidas</span>
          <h2 id="decision-guide-title">Empieza por la pregunta correcta</h2>
          <p className="section-lead">
            Si no tienes claro que herramienta abrir primero, usa estas rutas como atajo. Cada una
            responde a una necesidad distinta y devuelve un tipo de resultado diferente.
          </p>
        </div>

        <div className="routes-grid">
          {tools.map((tool) => (
            <article className="route-card" key={tool.name}>
              <span className="route-kicker">{tool.category}</span>
              <h3>{tool.primaryQuestion}</h3>
              <p>{tool.bestWhen}</p>
              <a className="tool-link" href={tool.trackingHref}>
                Ir a {tool.name}
              </a>
            </article>
          ))}
        </div>

        <div className="matrix-card" aria-label="Comparativa rapida de herramientas">
          <div className="matrix-head">
            <h3>Comparativa rapida</h3>
            <p>Que te devuelve cada herramienta y cuando compensa abrirla primero.</p>
          </div>

          <div className="matrix-list">
            {tools.map((tool) => (
              <article className="matrix-row" key={tool.name}>
                <div className="matrix-main">
                  <strong>{tool.name}</strong>
                  <span>{tool.category}</span>
                </div>
                <div className="matrix-detail">
                  <p>
                    <strong>Salida principal:</strong> {tool.output}
                  </p>
                  <p>
                    <strong>Cuando usarla:</strong> {tool.bestWhen}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
