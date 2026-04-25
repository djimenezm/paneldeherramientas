import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';

const route = '/recursos-para-autonomos';
const title = 'Recursos para autonomos que venden servicios digitales';
const description =
  'Guia practica con calculadoras y recursos para autonomos: cuanto facturar, programas de facturacion, presupuestos, cuotas recurrentes y herramientas para ordenar mejor el negocio.';

const faqItems = [
  {
    question: 'Por donde deberia empezar un autonomo si aun no tiene claro su precio?',
    answer:
      'Lo mas util suele ser empezar por una referencia economica clara: cuanto necesita facturar al mes, cuanto margen deja cada servicio y como convertir ese numero en presupuesto o cuota mensual.',
  },
  {
    question: 'Tiene sentido usar una solucion gratuita de facturacion al principio?',
    answer:
      'Puede tenerlo si el volumen es bajo y el objetivo inmediato es cumplir con la parte operativa. Cuando el negocio gana complejidad, suele compensar valorar software con mas automatizacion y mejor seguimiento.',
  },
  {
    question: 'Esta pagina sustituye el criterio fiscal o el asesoramiento profesional?',
    answer:
      'No. Funciona como recurso editorial y punto de entrada del ecosistema. Sirve para ordenar decisiones y descubrir herramientas utiles, pero no sustituye una revision profesional cuando la situacion lo requiere.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'recursos para autonomos',
    'herramientas para autonomos digitales',
    'apps para autonomos espana',
    'programas de facturacion autonomos',
    'recursos para facturar y presupuestar',
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

export default function RecursosParaAutonomosPage() {
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
    datePublished: '2026-04-25',
    dateModified: '2026-04-25',
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
        id="recursos-autonomos-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="recursos-autonomos-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="recursos-autonomos-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Recurso del ecosistema</span>
            <h1>Recursos para autonomos que venden servicios digitales</h1>
            <p className="lead">
              Si trabajas como autonomo y tu servicio depende de presupuestos, facturacion y una
              operativa cada vez mas estable, este recurso te ayuda a ordenar las herramientas que
              mas sentido tienen segun la pregunta que quieres resolver hoy.
            </p>
            <div className="hero-badges" aria-label="Que cubre este recurso">
              <span className="hero-badge">Facturacion</span>
              <span className="hero-badge">Presupuestos</span>
              <span className="hero-badge">Operativa</span>
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
            <h2>Como usar esta pagina</h2>
            <ul className="article-list">
              <li>Empieza por la pregunta economica o operativa que mas te bloquea.</li>
              <li>Ve despues a la calculadora o guia mas especifica.</li>
              <li>Usa software solo cuando ya tengas mas claro el numero base.</li>
              <li>Apoyate en el panel para no perder contexto entre herramientas.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>Para un autonomo, el orden importa mas que la cantidad de herramientas</h2>
          <p>
            Muchas veces el bloqueo no esta en que falte una aplicacion, sino en que todavia no
            esta claro cuanto hay que facturar, que margen minimo deja cada servicio o que parte
            del trabajo deberia convertirse en una cuota recurrente.
          </p>
          <p>
            Cuando ese orden se aclara, elegir herramienta es bastante mas facil: primero numero,
            despues presupuesto y por ultimo operativa.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> antes de meter mas software, resuelve el numero que debe
            sostener tu negocio.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Bloques clave para autonomos">
          <article className="feature-card">
            <h2>1. Facturacion y referencia mensual</h2>
            <p>
              Si no sabes cuanto necesitas facturar para llegar a tu neto objetivo, es facil que
              aceptes proyectos razonables en apariencia pero flojos en rentabilidad real.
            </p>
          </article>

          <article className="feature-card">
            <h2>2. Presupuestos y propuestas</h2>
            <p>
              Una vez tienes una referencia mensual, toca convertirla en propuestas, alcances y
              entregables defendibles para no presupuestar a ciegas.
            </p>
          </article>

          <article className="feature-card">
            <h2>3. Operativa y recurrencia</h2>
            <p>
              Cuando el negocio ya rueda, necesitas ordenar facturacion, soporte recurrente y la
              parte administrativa sin que se coma horas de trabajo util.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Recursos clave</span>
          <h2>Empieza por la herramienta que mejor encaja con tu problema actual</h2>
        </div>
        <div className="container feature-grid" aria-label="Recursos destacados para autonomos">
          <article className="feature-card">
            <h3>Si necesitas saber cuanto facturar</h3>
            <p>
              Empieza por <a href="https://www.cuantofacturar.es">Cuanto Facturar</a> y completa el
              contexto con la guia de{' '}
              <a href="https://www.cuantofacturar.es/mejores-programas-facturacion-autonomos">
                mejores programas de facturacion para autonomos
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Si ya presupuestas proyectos cerrados</h3>
            <p>
              Usa <a href="https://www.cuantopresupuestar.es">Cuanto Presupuestar</a> y apoyalo con
              la{' '}
              <a href="https://www.cuantopresupuestar.es/plantilla-presupuesto-freelance">
                plantilla de presupuesto freelance
              </a>{' '}
              y la guia sobre{' '}
              <a href="https://www.cuantopresupuestar.es/como-hacer-una-propuesta-comercial">
                como hacer una propuesta comercial
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Si vendes mantenimiento o soporte</h3>
            <p>
              Apoyate en{' '}
              <a href="https://www.mantenimientowebmensual.es">Mantenimiento Web Mensual</a> y en la
              guia de{' '}
              <a href="https://www.mantenimientowebmensual.es/precio-mantenimiento-wordpress">
                precio de mantenimiento WordPress
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Si tu servicio es una landing o una pieza concreta</h3>
            <p>
              Usa{' '}
              <a href="https://www.cuantocobrarlandingpage.es">Cuanto Cobrar Landing Page</a> para
              validar mejor un servicio cerrado y no mezclarlo con proyectos o cuotas mas amplias.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>El orden mas sano para un autonomo de servicios</h2>
          <ol className="article-list article-list-ordered">
            <li>Primero define tu objetivo mensual y tu suelo economico.</li>
            <li>Despues convierte ese numero en presupuesto o propuesta.</li>
            <li>Ordena luego la facturacion y la parte operativa.</li>
            <li>Y solo despues anade capas extra de software o procesos.</li>
          </ol>
          <p>
            Ese orden reduce bastante la sensacion de caos. No necesitas todas las herramientas a
            la vez; necesitas la correcta en el momento correcto.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Usa el panel como mapa y vuelve cuando cambie tu pregunta</h2>
          <p>
            Esta pagina esta pensada para darte una vista mas operativa del ecosistema. Si tu foco
            es mas de servicios digitales, tambien puedes revisar la pagina de{' '}
            <Link href="/herramientas-para-freelancers">herramientas para freelancers</Link> y
            usar ambas como puertas de entrada segun la duda que tengas.
          </p>
          <div className="guide-cta">
            <Link href="/#herramientas" className="tool-link">
              Volver al directorio
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="recursos-autonomos-faq-title">
        <div className="container text-block">
          <h2 id="recursos-autonomos-faq-title">
            Preguntas frecuentes sobre recursos para autonomos
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
