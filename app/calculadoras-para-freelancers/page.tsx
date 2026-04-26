import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';
import { pricingWorkflow, tools } from '@/lib/tools';

const route = '/calculadoras-para-freelancers';
const title = 'Calculadoras para freelancers: precios, facturacion y presupuestos';
const description =
  'Guia practica para elegir calculadoras para freelancers: cuanto facturar, cuanto presupuestar, precio de landing pages y cuotas de mantenimiento web mensual.';

const faqItems = [
  {
    question: 'Que calculadora deberia usar primero como freelance?',
    answer:
      'Si no tienes claro tu suelo mensual, empieza por una calculadora de facturacion. Despues baja esa referencia a presupuestos, landings o cuotas recurrentes segun el tipo de servicio que vendas.',
  },
  {
    question: 'Sirve la misma calculadora para todos los servicios?',
    answer:
      'No siempre. Una referencia mensual es la base, pero no calcula igual una landing, un proyecto cerrado o una cuota de mantenimiento. Por eso conviene usar calculadoras especializadas.',
  },
  {
    question: 'Estas calculadoras sustituyen una asesoria?',
    answer:
      'No. Son herramientas orientativas para decidir mejor precios, margen e importes. Para decisiones fiscales, legales o contratos importantes conviene revisar el caso con un profesional.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'calculadoras para freelancers',
    'calculadora freelance',
    'calculadora precios freelance',
    'calculadora cuanto cobrar freelance',
    'calculadora presupuestos freelance',
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

export default function CalculadorasParaFreelancersPage() {
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

  const calculatorListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Calculadoras para freelancers',
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
        id="calculadoras-freelancers-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="calculadoras-freelancers-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="calculadoras-freelancers-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorListSchema) }}
      />
      <Script
        id="calculadoras-freelancers-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Mapa de calculadoras</span>
            <h1>Calculadoras para freelancers: precios, facturacion y presupuestos</h1>
            <p className="lead">
              No necesitas una calculadora para todo. Necesitas elegir la adecuada segun la decision:
              cuanto facturar al mes, cuanto presupuestar por proyecto, cuanto cobrar por una
              landing o que cuota mensual poner a un mantenimiento.
            </p>
            <div className="hero-badges" aria-label="Tipos de calculadoras">
              <span className="hero-badge">Facturacion</span>
              <span className="hero-badge">Presupuestos</span>
              <span className="hero-badge">Cuotas y landings</span>
            </div>
            <div className="guide-cta">
              <Link href="/#herramientas" className="tool-link">
                Ver directorio
              </Link>
              <Link href="/herramientas-para-freelancers" className="tool-link">
                Ver herramientas
              </Link>
            </div>
          </div>

          <aside className="feature-card article-summary">
            <h2>Orden recomendado</h2>
            <ul className="article-list">
              <li>Primero calcula tu suelo mensual.</li>
              <li>Despues baja esa referencia al servicio concreto.</li>
              <li>Separa proyectos cerrados de cuotas recurrentes.</li>
              <li>Usa el resultado como punto de partida, no como cierre fiscal.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>Que calculadora usar segun la pregunta que tienes</h2>
          <p>
            La mejor calculadora no es la que tiene mas campos, sino la que responde a tu pregunta
            actual. Un freelance puede necesitar calcular su facturacion mensual, una tarifa por
            hora, un presupuesto cerrado, una landing concreta o una cuota recurrente.
          </p>
          <p>
            Si empiezas por la calculadora equivocada, puedes mezclar problemas distintos: una cosa
            es saber cuanto necesitas facturar para vivir de tu actividad y otra muy distinta es
            convertir ese numero en una propuesta comercial.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> empieza por la base economica y despues baja al tipo de
            servicio que vas a vender.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Calculadoras activas para freelancers">
          {tools.map((tool) => (
            <article className="feature-card" key={tool.href}>
              <span className="tool-category">{tool.category}</span>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <p>
                <strong>Mejor cuando:</strong> {tool.bestWhen}
              </p>
              <a href={tool.trackingHref} className="tool-link">
                Abrir calculadora
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Secuencia practica</span>
          <h2>Usalas como una cadena de decisiones</h2>
          <p>
            Si trabajas como freelance, lo mas sano es no saltar directamente al precio final. La
            secuencia ayuda a evitar que una cifra aparente esconda falta de margen, horas no
            facturables o soporte posterior sin cobrar.
          </p>
        </div>
        <div className="container workflow-grid" aria-label="Flujo recomendado de calculadoras">
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

      <section className="section alt">
        <div className="container text-block">
          <h2>Errores comunes al usar calculadoras freelance</h2>
          <ol className="article-list article-list-ordered">
            <li>Confundir facturacion con neto disponible.</li>
            <li>Calcular precio por proyecto sin estimar horas reales.</li>
            <li>Meter soporte recurrente dentro de un proyecto cerrado.</li>
            <li>No separar IVA, costes directos y margen.</li>
            <li>Copiar una cifra del mercado sin validar tu propio suelo.</li>
            <li>No dejar por escrito alcance, revisiones y extras.</li>
          </ol>
          <p>
            Si quieres una vista mas editorial, revisa tambien{' '}
            <Link href="/herramientas-para-freelancers">herramientas para freelancers</Link>. Si tu
            foco esta en el dia a dia de un autonomo, ve a{' '}
            <Link href="/recursos-para-autonomos">recursos para autonomos</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Rutas especializadas</span>
          <h2>Baja a la categoria que encaja con tu servicio</h2>
          <div className="feature-grid" aria-label="Categorias de calculadoras y recursos">
            <article className="feature-card">
              <h3>Facturacion y tarifa</h3>
              <p>
                Para objetivos netos, cuota, IRPF, IVA y tarifa por hora.
              </p>
              <Link href="/mejores-herramientas-para-facturacion-autonomos" className="tool-link">
                Ver facturacion
              </Link>
            </article>

            <article className="feature-card">
              <h3>Presupuestos freelance</h3>
              <p>
                Para proyectos cerrados, horas, margen, alcance, revisiones y propuesta.
              </p>
              <Link
                href="/mejores-herramientas-para-presupuestos-freelance"
                className="tool-link"
              >
                Ver presupuestos
              </Link>
            </article>

            <article className="feature-card">
              <h3>Mantenimiento web</h3>
              <p>
                Para cuotas mensuales, soporte, horas incluidas, WordPress y contratos.
              </p>
              <Link href="/mejores-herramientas-para-mantenimiento-web" className="tool-link">
                Ver mantenimiento
              </Link>
            </article>

            <article className="feature-card">
              <h3>Landing pages</h3>
              <p>
                Para estructura, secciones, copy, integraciones, precio y presupuesto de landing.
              </p>
              <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
                Ver landing pages
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="calculadoras-freelancers-faq-title">
        <div className="container text-block">
          <h2 id="calculadoras-freelancers-faq-title">
            Preguntas frecuentes sobre calculadoras para freelancers
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
