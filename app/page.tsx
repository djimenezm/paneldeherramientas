import Link from 'next/link';
import Script from 'next/script';
import DecisionGuide from '@/components/DecisionGuide';
import FAQ, { faqItems } from '@/components/FAQ';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ToolDirectory from '@/components/ToolDirectory';
import { siteConfig } from '@/lib/site';
import { featuredGuides, liveTools, pendingTools, pricingWorkflow, tools } from '@/lib/tools';

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

  const guideListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Guias destacadas del ecosistema',
    itemListElement: featuredGuides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: guide.title,
      url: guide.href,
    })),
  };

  const workflowListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Flujo recomendado para poner precios',
    itemListElement: pricingWorkflow.map((workflowStep, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: workflowStep.title,
      url: workflowStep.href,
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
        id="guide-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideListSchema) }}
      />
      <Script
        id="workflow-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowListSchema) }}
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
            <div className="guide-cta">
              <Link href="/mejores-herramientas-para-facturacion-autonomos" className="tool-link">
                Empezar por facturacion
              </Link>
              <Link
                href="/mejores-herramientas-para-presupuestos-freelance"
                className="tool-link"
              >
                Empezar por presupuestos
              </Link>
            </div>
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
        <div className="container section-heading">
          <span className="eyebrow">Empieza por aqui</span>
          <h2>Elige la rama segun la pregunta que quieres resolver hoy</h2>
          <p className="section-lead">
            Si vienes con una duda concreta, no hace falta recorrer todo el panel. Estas cuatro
            rutas te llevan a la parte del ecosistema que mejor encaja con tu bloqueo principal.
          </p>
        </div>
        <div className="container quick-start-grid" aria-label="Rutas principales del ecosistema">
          <article className="quick-start-card">
            <span className="route-kicker">Facturacion</span>
            <h3>No se cuanto deberia facturar al mes</h3>
            <p>
              Empieza por la rama de facturacion si tu problema principal es entender cuota, IRPF,
              IVA y una cifra mensual defendible.
            </p>
            <div className="guide-cta">
              <Link href="/mejores-herramientas-para-facturacion-autonomos" className="tool-link">
                Ver herramientas para facturacion
              </Link>
            </div>
          </article>

          <article className="quick-start-card">
            <span className="route-kicker">Presupuestos</span>
            <h3>Quiero aterrizar mejor un proyecto cerrado</h3>
            <p>
              Si vendes proyectos con alcance, entregables y margen, esta ruta te lleva a las
              piezas mas utiles para presupuestar mejor.
            </p>
            <div className="guide-cta">
              <Link
                href="/mejores-herramientas-para-presupuestos-freelance"
                className="tool-link"
              >
                Ver herramientas para presupuestos
              </Link>
            </div>
          </article>

          <article className="quick-start-card">
            <span className="route-kicker">Mantenimiento</span>
            <h3>Quiero poner cuota a soporte o mantenimiento</h3>
            <p>
              Usa esta rama si lo que vendes es recurrente y necesitas una cuota mensual mas clara
              para soporte, mantenimiento o bolsas de horas.
            </p>
            <div className="guide-cta">
              <Link href="/mejores-herramientas-para-mantenimiento-web" className="tool-link">
                Ver herramientas para mantenimiento
              </Link>
            </div>
          </article>

          <article className="quick-start-card">
            <span className="route-kicker">Landing pages</span>
            <h3>Solo quiero saber cuanto cobrar una landing</h3>
            <p>
              Si tu servicio es muy concreto y no quieres mezclarlo con proyectos mas grandes,
              esta ruta te baja rapido al caso de una landing page.
            </p>
            <div className="guide-cta">
              <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
                Ver herramientas para landing pages
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt" id="flujo-recomendado">
        <div className="container section-heading">
          <span className="eyebrow">Flujo recomendado</span>
          <h2>Usa las herramientas como una secuencia, no como piezas sueltas</h2>
          <p className="section-lead">
            El camino mas util es empezar por tu suelo mensual y bajar despues a presupuestos,
            cuotas o servicios concretos. Todas las calculadoras activas devuelven ahora un resumen
            corto que puedes copiar y guardar.
          </p>
        </div>

        <div className="container workflow-grid" aria-label="Flujo recomendado de calculo">
          {pricingWorkflow.map((workflowStep) => (
            <article className="workflow-card" key={workflowStep.step}>
              <div className="workflow-step">{workflowStep.step}</div>
              <span className="route-kicker">{workflowStep.toolName}</span>
              <h3>{workflowStep.title}</h3>
              <p>{workflowStep.description}</p>
              <div className="workflow-takeaway">
                <strong>Resultado:</strong> {workflowStep.takeaway}
              </div>
              <a href={workflowStep.trackingHref} className="tool-link">
                Abrir {workflowStep.toolName}
              </a>
            </article>
          ))}
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

      <section className="section alt" id="guias-destacadas">
        <div className="container section-heading">
          <span className="eyebrow">Guias destacadas</span>
          <h2>Rutas nuevas para profundizar despues de usar una calculadora</h2>
          <p className="section-lead">
            Estas paginas atacan dudas muy concretas y conectan cada herramienta con una siguiente
            lectura practica. Son buenos puntos de entrada si llegas desde buscadores o si quieres
            pasar de la cifra a una decision.
          </p>
        </div>

        <div className="container guide-grid" aria-label="Guias destacadas del ecosistema">
          {featuredGuides.map((guide) => (
            <article className="guide-card" key={guide.href}>
              <div className="tool-meta">
                <span className="tool-category">{guide.category}</span>
                <span className="guide-tool">{guide.relatedTool}</span>
              </div>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <a href={guide.trackingHref} className="tool-link">
                Abrir guia
              </a>
            </article>
          ))}
        </div>
      </section>

      <DecisionGuide />

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
          <div className="guide-cta">
            <Link href="/herramientas-para-freelancers" className="tool-link">
              Ver recursos para freelancers
            </Link>
            <Link href="/recursos-para-autonomos" className="tool-link">
              Ver recursos para autonomos
            </Link>
            <Link href="/mejores-herramientas-para-presupuestos-freelance" className="tool-link">
              Ver herramientas para presupuestar mejor
            </Link>
            <Link href="/mejores-herramientas-para-mantenimiento-web" className="tool-link">
              Ver herramientas para mantenimiento web
            </Link>
            <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
              Ver herramientas para landing pages
            </Link>
            <Link href="/mejores-herramientas-para-facturacion-autonomos" className="tool-link">
              Ver herramientas para facturacion
            </Link>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}
