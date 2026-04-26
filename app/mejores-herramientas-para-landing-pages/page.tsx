import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';

const route = '/mejores-herramientas-para-landing-pages';
const title = 'Mejores herramientas para landing pages';
const description =
  'Guia practica para elegir herramientas y recursos para landing pages: calculadoras de precio, plantillas de propuesta, checklists y recursos para presupuestar mejor una landing como proyecto cerrado.';

const faqItems = [
  {
    question: 'Que herramienta necesito primero para cobrar mejor una landing page?',
    answer:
      'Lo mas util suele ser empezar por una referencia clara de precio. Antes de pensar en builders o herramientas tecnicas, conviene definir cuanto deberias cobrar por la landing segun alcance, revisiones, integraciones y margen.',
  },
  {
    question: 'Sirve la misma herramienta para una landing simple y para una de captacion con integraciones?',
    answer:
      'No siempre. Una landing muy basica y una orientada a captacion o ventas pueden compartir estructura, pero cambian bastante en tiempo, copy, integraciones y validacion. Por eso conviene usar recursos que ayuden a bajar el precio al caso real.',
  },
  {
    question: 'Esta guia habla de software o de recursos para fijar el precio?',
    answer:
      'Principalmente de recursos para fijar mejor el precio y presentar la oferta. La capa de software puede llegar despues, cuando ya tengas una metodologia mas estable para vender landings de forma recurrente.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'mejores herramientas para landing pages',
    'herramientas para presupuestar landing pages',
    'cuanto cobrar una landing page',
    'precio landing page freelance',
    'recursos para vender landing pages',
  ],
  openGraph: {
    title: `${title} | ${siteConfig.name}`,
    description,
    url: route,
    type: 'article',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${siteConfig.name}`,
    description,
    images: ['/opengraph-image'],
  },
};

export default function MejoresHerramientasLandingPagesPage() {
  const siteUrl = getSiteUrl();
  const pageUrl = new URL(route, siteUrl).toString();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'es',
    mainEntityOfPage: pageUrl,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    datePublished: '2026-04-26',
    dateModified: '2026-04-26',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: new URL('/', siteUrl).toString(),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: pageUrl,
      },
    ],
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
        id="landing-pages-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="landing-pages-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="landing-pages-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Recurso del ecosistema</span>
            <h1>Mejores herramientas para landing pages</h1>
            <p className="lead">
              Cobrar mejor una landing page no depende solo del builder o de una referencia cogida
              al vuelo. Necesitas una herramienta o recurso distinto segun el punto donde estas:
              fijar el precio base, defender mejor la propuesta y aclarar que alcance real tiene el
              proyecto.
            </p>
            <div className="hero-badges" aria-label="Que cubre esta guia">
              <span className="hero-badge">Precio por proyecto</span>
              <span className="hero-badge">Propuesta clara</span>
              <span className="hero-badge">Alcance y revisiones</span>
            </div>
            <div className="guide-cta">
              <Link href="/#herramientas" className="tool-link">
                Ver herramientas del panel
              </Link>
              <Link href="/herramientas-para-freelancers" className="tool-link">
                Ver recursos para freelancers
              </Link>
            </div>
          </div>

          <aside className="feature-card article-summary">
            <h2>Como leer esta guia</h2>
            <ul className="article-list">
              <li>Empieza por fijar el precio antes de pensar en la herramienta tecnica.</li>
              <li>Diferencia una landing simple de una con copy e integraciones.</li>
              <li>Usa recursos para presentar mejor la oferta, no solo para calcularla.</li>
              <li>Apoyate en el panel para moverte entre landing, presupuesto y soporte.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>La mejor herramienta para una landing suele ser la que te aclara el precio</h2>
          <p>
            Muchas personas buscan herramientas para landing pages pensando en diseño, bloques o
            builders, pero el atasco suele estar antes: no tener claro cuanto deberian cobrar, que
            incluye realmente el proyecto o como defender una propuesta que no se quede corta.
          </p>
          <p>
            Por eso esta guia separa cuatro capas: calculadora de precio, recursos de propuesta,
            piezas especializadas y capa operativa. No hacen lo mismo, y no conviene mezclarlas
            demasiado pronto.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> primero define un precio defendible para la landing;
            despues decide con que herramientas operarla o presentarla mejor.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Capas utiles para vender landing pages">
          <article className="feature-card">
            <h2>1. Calculadora de precio para landing</h2>
            <p>
              Es la mejor primera herramienta si todavia no sabes cuanto deberias cobrar por una
              landing page concreta. Te ayuda a considerar secciones, copy, integraciones,
              revisiones, costes directos y margen.
            </p>
          </article>

          <article className="feature-card">
            <h2>2. Plantilla o propuesta</h2>
            <p>
              Sirve para convertir la cifra en una oferta mas defendible: alcance, entregables,
              exclusiones, plazos y condiciones. Sin esta capa, el presupuesto puede quedarse flojo
              aunque el precio sea correcto.
            </p>
          </article>

          <article className="feature-card">
            <h2>3. Servicios recurrentes relacionados</h2>
            <p>
              Algunas landings acaban derivando en soporte, cambios o mantenimiento. En ese caso,
              conviene conectar el proyecto cerrado con una logica de cuota mensual mas clara.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Mi recomendacion</span>
          <h2>Que herramienta elegir segun el tipo de landing que vas a vender</h2>
        </div>
        <div className="container feature-grid" aria-label="Recomendaciones editoriales">
          <article className="feature-card">
            <h3>Mejor para calcular un precio defendible</h3>
            <p>
              Empieza por{' '}
              <a href="https://www.cuantocobrarlandingpage.es">Cuanto Cobrar Landing Page</a>. Es
              la herramienta mas directa del ecosistema cuando lo que necesitas es aterrizar el
              precio de una landing como proyecto cerrado.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para decidir alcance</h3>
            <p>
              Si el cliente duda entre una landing y una web completa, revisa{' '}
              <a href="https://www.cuantocobrarlandingpage.es/landing-page-vs-pagina-web">
                landing page vs pagina web
              </a>{' '}
              antes de presupuestar.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para definir que entra</h3>
            <p>
              Si ya sabes que sera una landing, usa{' '}
              <a href="https://www.cuantocobrarlandingpage.es/que-incluye-una-landing-page">
                que incluye una landing page
              </a>{' '}
              para separar secciones, copy, integraciones, revisiones y extras.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para presupuestos mas amplios</h3>
            <p>
              Si la landing forma parte de un proyecto mayor o de una propuesta mas completa, te
              conviene apoyarte tambien en{' '}
              <a href="https://www.cuantopresupuestar.es">Cuanto Presupuestar</a>.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para estructurar la oferta</h3>
            <p>
              Si el problema no es la cifra sino como presentarla, usa la{' '}
              <a href="https://www.cuantopresupuestar.es/plantilla-presupuesto-freelance">
                plantilla de presupuesto freelance
              </a>{' '}
              y la guia de{' '}
              <a href="https://www.cuantopresupuestar.es/como-hacer-una-propuesta-comercial">
                propuesta comercial
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor si luego quieres cuota mensual</h3>
            <p>
              Si la landing puede llevar a un servicio recurrente, conecta el proyecto con{' '}
              <a href="https://www.mantenimientowebmensual.es">Mantenimiento Web Mensual</a> para
              no dejar el soporte posterior sin precio claro.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>Cuando compensa meter una capa mas operativa</h2>
          <p>
            La parte tecnica gana importancia cuando ya haces varias landings, trabajas con funnels
            mas complejos o necesitas ordenar mejor entregables, revisiones e integraciones. Antes
            de eso, el mayor retorno suele estar en fijar bien el precio y mejorar la propuesta.
          </p>
          <p>
            El orden sano suele ser este: calcula el precio, convierte la cifra en una propuesta
            clara y solo despues decide si necesitas procesos o herramientas operativas mas finas.
          </p>
          <ol className="article-list article-list-ordered">
            <li>Calcula primero una cifra defendible para la landing.</li>
            <li>Aclara despues alcance, revisiones e integraciones.</li>
            <li>Usa recursos para presentar mejor la oferta.</li>
            <li>Solo entonces valora una capa mas operativa o recurrente.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Usa el panel para conectar landing, presupuesto y mantenimiento</h2>
          <p>
            Si tu trabajo mezcla proyecto cerrado, una landing concreta y luego soporte mensual, el
            panel te ayuda a moverte entre esas tres capas sin perder contexto. Empieza por el
            precio de la landing y sube o baja de nivel segun la complejidad del servicio.
          </p>
          <div className="guide-cta">
            <Link href="/#herramientas" className="tool-link">
              Volver al directorio
            </Link>
            <Link href="/herramientas-para-freelancers" className="tool-link">
              Ver recursos para freelancers
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="landing-pages-faq-title">
        <div className="container text-block">
          <h2 id="landing-pages-faq-title">
            Preguntas frecuentes sobre herramientas para landing pages
          </h2>

          <div className="faq-list">
            {faqItems.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
