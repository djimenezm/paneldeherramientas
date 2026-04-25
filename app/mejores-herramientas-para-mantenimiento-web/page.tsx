import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';

const route = '/mejores-herramientas-para-mantenimiento-web';
const title = 'Mejores herramientas para mantenimiento web';
const description =
  'Guia practica para elegir herramientas de mantenimiento web: calculadoras de cuota, checklists, soporte recurrente y recursos para definir mejor que incluye tu servicio mensual.';

const faqItems = [
  {
    question: 'Que herramienta necesito primero si quiero vender mantenimiento web mensual?',
    answer:
      'Lo primero suele ser definir una cuota defendible y aclarar que incluye realmente tu servicio. Antes de pensar en software mas tecnico, conviene tener clara la parte economica y la estructura minima del servicio recurrente.',
  },
  {
    question: 'Hace falta una herramienta tecnica o basta con una calculadora de cuota?',
    answer:
      'Depende de la fase. Para empezar a vender mantenimiento, una calculadora y una estructura clara del servicio suelen aportar mas que una pila tecnica compleja. Las herramientas operativas ganan valor cuando ya tienes varios clientes y necesitas ordenar mejor procesos recurrentes.',
  },
  {
    question: 'Esta guia sirve solo para WordPress?',
    answer:
      'No. WordPress es un caso muy comun y por eso aparece como referencia clara, pero la logica de cuota, alcance y soporte aplica tambien a otros tipos de webs cuando vendes mantenimiento o soporte mensual.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'mejores herramientas para mantenimiento web',
    'herramientas para vender mantenimiento web',
    'precio mantenimiento wordpress',
    'cuota mantenimiento web mensual',
    'como definir mantenimiento web',
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

export default function MejoresHerramientasMantenimientoWebPage() {
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
        id="mantenimiento-web-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="mantenimiento-web-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="mantenimiento-web-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Recurso del ecosistema</span>
            <h1>Mejores herramientas para mantenimiento web</h1>
            <p className="lead">
              Vender mantenimiento web no depende solo de tener un checklist tecnico. Necesitas una
              herramienta o recurso distinto segun el punto donde estas: definir una cuota mensual,
              concretar que incluye el servicio y decidir cuando compensa anadir una capa operativa
              mas tecnica.
            </p>
            <div className="hero-badges" aria-label="Que cubre esta guia">
              <span className="hero-badge">Cuotas mensuales</span>
              <span className="hero-badge">Alcance del servicio</span>
              <span className="hero-badge">Operativa recurrente</span>
            </div>
            <div className="guide-cta">
              <Link href="/#herramientas" className="tool-link">
                Ver herramientas del panel
              </Link>
              <Link href="/recursos-para-autonomos" className="tool-link">
                Ver recursos para autonomos
              </Link>
            </div>
          </div>

          <aside className="feature-card article-summary">
            <h2>Como leer esta guia</h2>
            <ul className="article-list">
              <li>Empieza por definir la cuota antes de pensar en la parte tecnica.</li>
              <li>Aclara bien que incluye y que no incluye el servicio mensual.</li>
              <li>No metas herramientas operativas antes de validar el modelo.</li>
              <li>Usa el panel para moverte entre cuota, landing y presupuesto cuando se mezclen.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>La mejor herramienta depende del modelo recurrente, no solo del stack tecnico</h2>
          <p>
            Muchas personas buscan herramientas de mantenimiento web pensando en backups,
            monitorizacion o seguridad, pero el bloqueo de verdad suele estar antes: no saber cuanto
            cobrar al mes, no tener claro el alcance del servicio o mezclar soporte, mejoras y
            mantenimiento en una sola cuota poco defendible.
          </p>
          <p>
            Por eso esta guia separa cuatro capas: calculadora de cuota, checklist del servicio,
            recursos comerciales y capa operativa. Cada una resuelve una parte distinta del
            problema.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> primero define una cuota sostenible y un alcance claro;
            despues decide con que herramientas operarlo mejor.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Capas utiles para vender mantenimiento web">
          <article className="feature-card">
            <h2>1. Calculadora de cuota mensual</h2>
            <p>
              Es la mejor primera herramienta si todavia no sabes que cuota deberias cobrar por un
              servicio recurrente. Te ayuda a partir de horas, costes y margen en vez de fijar una
              cifra casi por intuicion.
            </p>
          </article>

          <article className="feature-card">
            <h2>2. Checklist de que incluye el servicio</h2>
            <p>
              Sirve para dejar claro si tu cuota cubre revisiones, actualizaciones, copias,
              pequenas incidencias o tiempo de soporte. Sin esta capa, es facil vender una cuota
              confusa.
            </p>
          </article>

          <article className="feature-card">
            <h2>3. Herramientas operativas</h2>
            <p>
              Entran cuando ya tienes varios clientes y te compensa ordenar procesos recurrentes.
              Antes de eso, el mayor retorno suele estar en definir mejor la cuota y el alcance.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Mi recomendacion</span>
          <h2>Que herramienta elegir segun el punto donde estas</h2>
        </div>
        <div className="container feature-grid" aria-label="Recomendaciones editoriales">
          <article className="feature-card">
            <h3>Mejor para calcular una cuota defendible</h3>
            <p>
              Empieza por{' '}
              <a href="https://www.mantenimientowebmensual.es">Mantenimiento Web Mensual</a>. Si
              ofreces soporte, mantenimiento o una cuota recurrente, es la herramienta mas directa
              del ecosistema para aterrizar la parte economica.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para afinar WordPress como caso comun</h3>
            <p>
              Usa la guia de{' '}
              <a href="https://www.mantenimientowebmensual.es/precio-mantenimiento-wordpress">
                precio de mantenimiento WordPress
              </a>{' '}
              cuando quieras una referencia mas concreta para un caso muy habitual.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para entregar un recurso inicial</h3>
            <p>
              Si quieres estructurar mejor la oferta o el servicio, apóyate en el{' '}
              <a href="https://www.mantenimientowebmensual.es/kit-mantenimiento-web">
                kit de mantenimiento web
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para servicios concretos relacionados</h3>
            <p>
              Si vendes una landing como proyecto cerrado y luego quieres transformarla en cuota,
              combina esta guia con{' '}
              <a href="https://www.cuantocobrarlandingpage.es">Cuanto Cobrar Landing Page</a>.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>Cuando compensa meter una capa mas operativa</h2>
          <p>
            La parte tecnica gana peso cuando ya tienes varios clientes recurrentes y necesitas
            ordenar tareas, revisiones, backups o incidencias. Antes de eso, muchas veces no falta
            software: falta una cuota bien planteada y una promesa de servicio mas clara.
          </p>
          <p>
            El orden sano suele ser este: define primero tu cuota, concreta el alcance y solo
            despues decide que herramientas necesitas para operar mejor.
          </p>
          <ol className="article-list article-list-ordered">
            <li>Calcula primero una cuota que te deje margen real.</li>
            <li>Define despues que incluye y que excluye el servicio.</li>
            <li>Apoyate en recursos o checklist para venderlo mejor.</li>
            <li>Solo entonces decide si necesitas una pila tecnica mas seria.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Usa el panel para conectar cuota, presupuesto y servicios recurrentes</h2>
          <p>
            Si lo que vendes mezcla proyecto cerrado, landing y soporte mensual, moverte entre las
            distintas herramientas del ecosistema te ahorra bastante ruido. Puedes empezar por la
            cuota y despues bajar al caso concreto de una landing o de un presupuesto cerrado.
          </p>
          <div className="guide-cta">
            <Link href="/#herramientas" className="tool-link">
              Volver al directorio
            </Link>
            <Link href="/recursos-para-autonomos" className="tool-link">
              Ver recursos para autonomos
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="mantenimiento-web-faq-title">
        <div className="container text-block">
          <h2 id="mantenimiento-web-faq-title">
            Preguntas frecuentes sobre herramientas para mantenimiento web
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
