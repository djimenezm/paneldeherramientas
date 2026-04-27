import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';

const route = '/mejores-herramientas-para-presupuestos-freelance';
const title = 'Mejores herramientas para presupuestos freelance';
const description =
  'Guia practica para elegir herramientas de presupuestos freelance: calculadoras, plantillas, propuestas comerciales y software para convertir mejor tus precios en ofertas defendibles.';

const faqItems = [
  {
    question: 'Que herramienta necesito primero para presupuestar mejor como freelance?',
    answer:
      'Normalmente no deberias empezar por el software de gestion, sino por una referencia clara de precio. Primero calcula cuanto necesitas cobrar, despues baja ese numero a una plantilla o propuesta y solo entonces valora si te compensa una herramienta mas operativa.',
  },
  {
    question: 'Sirve una plantilla simple o hace falta un software de presupuestos?',
    answer:
      'Depende del momento del negocio. Una plantilla clara suele ser suficiente cuando todavia estas afinando tu forma de presupuestar. El software gana sentido cuando ya manejas mas volumen, necesitas seguimiento o quieres ordenar mejor propuestas, aceptaciones y conversiones.',
  },
  {
    question: 'Esta guia recomienda solo herramientas del ecosistema?',
    answer:
      'La guia prioriza herramientas y recursos del ecosistema para resolver la parte economica y estructural del presupuesto. Aun asi, tambien explica en que momento puede compensar pasar a una capa mas operativa con software externo.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'mejores herramientas para presupuestos freelance',
    'herramientas para presupuestar proyectos freelance',
    'plantilla presupuesto freelance',
    'software para propuestas comerciales',
    'como presupuestar mejor como freelance',
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

export default function MejoresHerramientasPresupuestosFreelancePage() {
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
        id="presupuestos-freelance-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="presupuestos-freelance-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="presupuestos-freelance-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Recurso del ecosistema</span>
            <h1>Mejores herramientas para presupuestos freelance</h1>
            <p className="lead">
              Presupuestar mejor no depende solo de tener una plantilla bonita. Necesitas una
              herramienta o recurso distinto segun el punto donde estas: calcular tu precio base,
              convertirlo en una propuesta clara o dar el salto a una capa mas operativa.
            </p>
            <div className="hero-badges" aria-label="Que cubre esta guia">
              <span className="hero-badge">Calculadoras</span>
              <span className="hero-badge">Plantillas</span>
              <span className="hero-badge">Propuestas</span>
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
              <li>Empieza por la herramienta que resuelve tu bloqueo actual.</li>
              <li>No confundas una plantilla con una referencia economica.</li>
              <li>Usa software cuando tu proceso ya este mas definido.</li>
              <li>Combina recursos del panel en vez de intentar resolverlo todo con una sola app.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>La mejor herramienta depende de la fase del presupuesto, no del logo</h2>
          <p>
            Cuando un freelance siente que presupuestar le cuesta, muchas veces busca software
            demasiado pronto. El problema real suele estar antes: no tener claro cual es su suelo
            economico, que margen deberia proteger o que estructura necesita para defender mejor
            una propuesta.
          </p>
          <p>
            Por eso esta guia separa cuatro capas: calculadora, plantilla, propuesta y operativa.
            No compiten entre si. Se complementan.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> primero necesitas una cifra sana, luego una forma clara de
            presentarla y solo despues una capa mas operativa.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Capas utiles para presupuestar mejor">
          <article className="feature-card">
            <h2>1. Calculadora de presupuesto</h2>
            <p>
              Es la mejor primera herramienta si todavia no sabes cuanto deberias cobrar por un
              proyecto. Te ayuda a partir de horas, costes, buffer y margen en vez de improvisar.
            </p>
          </article>

          <article className="feature-card">
            <h2>2. Plantilla de presupuesto</h2>
            <p>
              Te sirve cuando ya tienes una cifra base y necesitas una estructura clara para
              presentarla con alcance, entregables, exclusiones y condiciones.
            </p>
          </article>

          <article className="feature-card">
            <h2>3. Guion de propuesta comercial</h2>
            <p>
              Es la capa que convierte el precio en una narrativa mas defendible: contexto,
              problema, solucion, entregables, plazos y cierre.
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
            <h3>Mejor para calcular el precio base</h3>
            <p>
              Empieza por <a href="https://www.cuantopresupuestar.es">Cuanto Presupuestar</a>. Si
              vendes proyectos cerrados y quieres saber si una propuesta te deja margen real, es la
              herramienta mas directa del ecosistema.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para estimar horas antes de cerrar precio</h3>
            <p>
              Antes de convertir esfuerzo en importe, revisa la guia sobre{' '}
              <a href="https://www.cuantopresupuestar.es/como-calcular-horas-proyecto-freelance">
                como calcular horas de un proyecto freelance
              </a>
              . Es util para no olvidar reuniones, gestion, revisiones, pruebas y buffer.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para tener una estructura reutilizable</h3>
            <p>
              Usa la{' '}
              <a href="https://www.cuantopresupuestar.es/plantilla-presupuesto-freelance">
                plantilla de presupuesto freelance
              </a>{' '}
              cuando ya sabes mas o menos tu cifra y necesitas dejarla bien presentada.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para elegir modelo de cobro</h3>
            <p>
              Si dudas entre cobrar por proyecto cerrado, por horas o por fases, revisa la guia de{' '}
              <a href="https://www.cuantopresupuestar.es/precio-cerrado-o-por-horas-freelance">
                precio cerrado o por horas freelance
              </a>{' '}
              antes de enviar la propuesta.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para proteger margen</h3>
            <p>
              Si ya tienes horas y alcance, revisa la guia de{' '}
              <a href="https://www.cuantopresupuestar.es/margen-presupuesto-freelance">
                margen en presupuesto freelance
              </a>{' '}
              para no confundir buffer, costes y beneficio real antes de cerrar precio.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para dividir proyectos largos en hitos</h3>
            <p>
              Si el alcance tiene partes claras y partes todavia abiertas, usa la guia de{' '}
              <a href="https://www.cuantopresupuestar.es/presupuesto-por-fases-freelance">
                presupuesto por fases freelance
              </a>{' '}
              para separar entregables, pagos, revisiones y extras sin regalar margen.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para cerrar condiciones de pago</h3>
            <p>
              Antes de enviar la propuesta, revisa{' '}
              <a href="https://www.cuantopresupuestar.es/condiciones-pago-presupuesto-freelance">
                condiciones de pago en presupuesto freelance
              </a>{' '}
              para dejar claros anticipo, hitos, plazos y entrega final.
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para defender mejor la oferta</h3>
            <p>
              Si lo que te falla es como explicas el valor del proyecto, entra en{' '}
              <a href="https://www.cuantopresupuestar.es/como-hacer-una-propuesta-comercial">
                como hacer una propuesta comercial
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Mejor para servicios concretos</h3>
            <p>
              Si tu presupuesto es muy especifico, como una landing o una cuota de mantenimiento,
              usa una calculadora especializada como{' '}
              <a href="https://www.cuantocobrarlandingpage.es">Cuanto Cobrar Landing Page</a> o{' '}
              <a href="https://www.mantenimientowebmensual.es">Mantenimiento Web Mensual</a>.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>Cuando compensa pasar a una herramienta mas operativa</h2>
          <p>
            El software de presupuestos o de gestion comercial tiene sentido cuando ya haces un
            volumen razonable de propuestas, necesitas seguimiento, quieres ordenar mejor las
            aceptaciones o te compensa centralizar documentos y cliente.
          </p>
          <p>
            Antes de eso, muchas veces da mas retorno usar bien una calculadora, una plantilla y un
            guion comercial sencillo que pagar una solucion demasiado pronto.
          </p>
          <ol className="article-list article-list-ordered">
            <li>Calcula primero tu cifra defendible.</li>
            <li>Transformala despues en una plantilla clara.</li>
            <li>Refuerzala con una propuesta mejor explicada.</li>
            <li>Solo entonces decide si necesitas software de seguimiento.</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Usa el panel para no perderte entre calculadoras, plantillas y recursos</h2>
          <p>
            Si tu bloqueo es economico, entra primero en la calculadora. Si tu problema es de
            presentacion, vete a la plantilla o a la propuesta. Y si quieres una vista mas amplia
            del ecosistema, vuelve al panel o entra en la guia de{' '}
            <Link href="/herramientas-para-freelancers">herramientas para freelancers</Link>.
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

      <section className="section alt" aria-labelledby="presupuestos-freelance-faq-title">
        <div className="container text-block">
          <h2 id="presupuestos-freelance-faq-title">
            Preguntas frecuentes sobre herramientas para presupuestos freelance
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
