'use client';

import { useMemo, useState } from 'react';
import { tools } from '@/lib/tools';

const allCategories = ['Todas', ...new Set(tools.map((tool) => tool.category))];

export default function ToolDirectory() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [search, setSearch] = useState('');

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === 'Todas' ? true : tool.category === activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [
        tool.name,
        tool.category,
        tool.description,
        tool.useCase,
        tool.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [activeCategory, search]);

  return (
    <section className="section" id="herramientas" aria-labelledby="tools-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Inventario actual</span>
          <h2 id="tools-title">Elige la herramienta que necesitas ahora</h2>
          <p className="section-lead">
            Cada app resuelve una parte concreta del mismo problema: poner precio con mas criterio,
            presupuestar mejor y no vender tu trabajo a ciegas.
          </p>
        </div>

        <div className="directory-controls" aria-label="Filtros del panel">
          <label className="search-field">
            <span className="search-label">Buscar</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Ejemplo: mantenimiento, IRPF, landing..."
              aria-label="Buscar herramienta"
            />
          </label>

          <div className="category-chips" aria-label="Filtrar por categoria">
            {allCategories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category ? 'category-chip is-active' : 'category-chip'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="directory-summary">
          Mostrando {filteredTools.length} herramienta{filteredTools.length === 1 ? '' : 's'}.
        </p>

        {filteredTools.length > 0 ? (
          <div className="tools-grid">
            {filteredTools.map((tool) => (
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
                  <a className="tool-link" href={tool.trackingHref}>
                    Abrir herramienta
                  </a>
                ) : (
                  <div className="tool-link tool-link-disabled">Disponible muy pronto</div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state" role="status">
            <strong>No hay coincidencias con ese filtro.</strong>
            <p>
              Prueba otra palabra o vuelve a la categoria <em>Todas</em> para ver el inventario
              completo.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
