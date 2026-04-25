import Script from 'next/script';
import FAQ, { faqItems } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ToolDirectory from '@/components/ToolDirectory';
import { siteConfig } from '@/lib/site';
import { liveTools, pendingTools, tools } from '@/lib/tools';

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: 'es',
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Herramientas publicas del ecosistema',
    itemListElement: tools.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.name,
      url: tool.href,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container hero-panel">
          <div>
            <span className="eyebrow">Panel central</span>
            <h1>Todas las herramientas del ecosistema en un solo sitio</h1>
            <p className="lead">
              Este panel reune las calculadoras y utilidades publicas que ya estan en marcha para
              ayudarte a facturar mejor, presupuestar proyectos, fijar cuotas recurrentes o poner
              precio a una landing page sin ir a ciegas.
            </p>
            <div className="hero-badges" aria-label="Estado actual del panel">
              <span className="hero-badge">{tools.length} herramientas listadas</span>
              <span className="hero-badge">{liveTools.length} activas ahora</span>
              <span className="hero-badge">{pendingTools.length} en despliegue</span>
            </div>
            <ul className="hero-points">
              <li>Un punto de entrada unico para todas las apps publicas del ecosistema.</li>
              <li>Herramientas pequenas, especializadas y pensadas para freelancers y autonomos.</li>
              <li>Actualizado conforme se publican nuevas calculadoras y guias.</li>
            </ul>
          </div>

          <aside className="hero-summary" aria-label="Resumen rapido del panel">
            <div className="hero-summary-card">
              <span>Para objetivos mensuales</span>
              <strong>Cuanto Facturar</strong>
              <p>Pasa de neto objetivo a facturacion, IRPF, IVA y tarifa por hora.</p>
            </div>
            <div className="hero-summary-card">
              <span>Para proyectos cerrados</span>
              <strong>Cuanto Presupuestar</strong>
              <p>Convierte horas, buffer y margen en un presupuesto defendible.</p>
            </div>
            <div className="hero-summary-card">
              <span>Para ingresos recurrentes</span>
              <strong>Mantenimiento Web Mensual</strong>
              <p>Fija cuotas de soporte y mantenimiento con mas criterio.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid" aria-label="Que puedes resolver desde el panel">
          <article className="feature-card">
            <h2>Precios de trabajo recurrente</h2>
            <p>
              Si ofreces soporte, mantenimiento o bolsas de horas mensuales, aqui podras encontrar
              herramientas para defender una cuota sin improvisar cada mes.
            </p>
          </article>

          <article className="feature-card">
            <h2>Precios de proyectos cerrados</h2>
            <p>
              Si vendes webs, landings o paquetes cerrados, las apps del panel te ayudan a detectar
              tu suelo economico y el margen minimo que deberias proteger.
            </p>
          </article>

          <article className="feature-card">
            <h2>Referencia para decidir mejor</h2>
            <p>
              Ninguna herramienta sustituye una revision profesional cuando toca, pero todas estan
              pensadas para ayudarte a tomar decisiones mas claras y menos intuitivas.
            </p>
          </article>
        </div>
      </section>

      <ToolDirectory />

      <section className="section alt" id="como-funciona">
        <div className="container conversion-grid">
          <div className="conversion-copy">
            <span className="eyebrow">Como usar el panel</span>
            <h2>Encuentra primero la necesidad, luego la herramienta</h2>
            <p>
              El panel no intenta mezclarlo todo en una sola app. La idea es justo la contraria:
              que puedas abrir una herramienta pequena y enfocada para cada decision importante.
            </p>
            <p>
              Si primero necesitas una referencia mensual, empieza por facturacion. Si ya vendes por
              proyecto, salta a presupuestos. Si trabajas con soporte recurrente, usa el calculo
              mensual. Y si lo tuyo son landings, ve a la herramienta especifica.
            </p>
          </div>

          <div className="conversion-steps" aria-label="Pasos para aprovechar el panel">
            <article className="conversion-step">
              <h3>1. Elige el caso correcto</h3>
              <p>Abre la app que mejor encaja con la decision que necesitas tomar hoy.</p>
            </article>

            <article className="conversion-step">
              <h3>2. Calcula con contexto</h3>
              <p>Introduce objetivo, costes, horas o alcance real para aterrizar una cifra mas util.</p>
            </article>

            <article className="conversion-step">
              <h3>3. Vuelve al panel</h3>
              <p>Usa este inventario como mapa rapido para cambiar de herramienta cuando cambie tu caso.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Coleccion en crecimiento</span>
          <h2>Un inventario publico pensado para crecer sin perder claridad</h2>
          <p>
            El objetivo del panel es que no tengas que recordar dominios sueltos ni depender de una
            sola app gigante. Aqui puedes ver de un vistazo que herramientas estan activas, cuales
            acaban de salir y que parte del problema resuelve cada una.
          </p>
          <p>
            La idea es seguir anadiendo nuevas herramientas utiles y mantener este panel como punto
            de entrada comun. Menos ruido, menos duplicacion y mas foco para elegir rapido.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> este panel no es una herramienta mas, sino el mapa para
            encontrar la que mejor te sirve en cada momento.
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
