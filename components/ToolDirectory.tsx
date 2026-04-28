import { tools } from '@/lib/tools';

export default function ToolDirectory() {
  return (
    <section className="section" id="herramientas" aria-labelledby="tools-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Inventario actual</span>
          <h2 id="tools-title">Elige la herramienta que necesitas ahora</h2>
          <p className="section-lead">
            Cada app resuelve una parte concreta del mismo problema: poner precio con más criterio,
            presupuestar mejor y no vender tu trabajo a ciegas.
          </p>
        </div>

        <p className="directory-summary">
          Mostrando {tools.length} herramienta{tools.length === 1 ? '' : 's'} activas.
        </p>

        <div className="tools-grid">
          {tools.map((tool) => (
            <article className="tool-card" key={tool.name}>
              <div className="tool-meta">
                <span className="tool-category">{tool.category}</span>
                <span
                  className={
                    tool.isLive ? 'tool-status tool-status-live' : 'tool-status tool-status-pending'
                  }
                >
                  {tool.availability}
                </span>
              </div>

              <h3>{tool.name}</h3>
              <p className="tool-description">{tool.description}</p>
              <p className="tool-use-case">
                <strong>Ideal para:</strong> {tool.useCase}
              </p>

              <ul className="tool-tags" aria-label={`Etiquetas de ${tool.name}`}>
                {tool.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              {tool.isLive ? (
                <a
                  className="tool-link"
                  href={tool.trackingHref}
                  aria-label={`Abrir ${tool.name} desde el inventario de herramientas`}
                >
                  Abrir {tool.name}
                </a>
              ) : (
                <div className="tool-link tool-link-disabled">Disponible muy pronto</div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
