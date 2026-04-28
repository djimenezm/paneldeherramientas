import { tools } from '@/lib/tools';

export default function DecisionGuide() {
  return (
    <section className="section alt" id="como-funciona" aria-labelledby="decision-guide-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Rutas rápidas</span>
          <h2 id="decision-guide-title">Compara el resultado que necesitas</h2>
          <p className="section-lead">
            Si no tienes claro qué herramienta abrir primero, compara la salida principal de cada
            calculadora antes de saltar al dominio concreto.
          </p>
        </div>

        <div className="matrix-card" aria-label="Comparativa rápida de herramientas">
          <div className="matrix-head">
            <h3>Comparativa rápida</h3>
            <p>Qué te devuelve cada herramienta y cuándo compensa abrirla primero.</p>
          </div>

          <div className="matrix-list">
            {tools.map((tool) => (
              <article className="matrix-row" key={tool.name}>
                <div className="matrix-main">
                  <strong>{tool.name}</strong>
                </div>
                <div className="matrix-detail">
                  <p>
                    <strong>Salida:</strong> {tool.output} Uso recomendado: {tool.bestWhen}
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
