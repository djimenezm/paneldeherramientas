import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { getSiteUrl, siteConfig } from '@/lib/site';
import { pricingWorkflow, tools } from '@/lib/tools';

const route = '/precios-freelance';
const title = 'Precios freelance: como calcular tarifas, presupuestos y cuotas';
const description =
  'Guia practica para calcular precios freelance: tarifa por hora, facturacion mensual, presupuestos cerrados, landing pages y cuotas de mantenimiento web.';

const faqItems = [
  {
    question: 'Como calculo mis precios como freelance?',
    answer:
      'Empieza por tu objetivo neto mensual, costes, impuestos y horas facturables reales. Despues convierte esa base en tarifa por hora, presupuesto cerrado o cuota mensual segun el servicio.',
  },
  {
    question: 'Es mejor cobrar por hora o por proyecto?',
    answer:
      'Depende del alcance y el riesgo. La tarifa por hora ayuda a calcular tu suelo interno. El precio por proyecto suele venderse mejor cuando hay entregables claros y limites definidos.',
  },
  {
    question: 'Cada servicio freelance deberia tener un precio distinto?',
    answer:
      'Si. Una landing, un mantenimiento mensual y un proyecto cerrado no tienen el mismo riesgo ni la misma estructura. Conviene calcularlos con una base comun, pero con criterios propios.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'precios freelance',
    'tarifas freelance',
    'cuanto cobrar freelance',
    'calcular precio freelance',
    'presupuestos freelance',
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

export default function PreciosFreelancePage() {
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
    datePublished: '2026-04-27',
    dateModified: '2026-04-27',
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

  const toolListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Herramientas para calcular precios freelance',
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
    <main id="contenido-principal">
      <Script
        id="precios-freelance-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="precios-freelance-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="precios-freelance-tool-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolListSchema) }}
      />
      <Script
        id="precios-freelance-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Guia central de precios</span>
            <h1>Precios freelance: como calcular tarifas, presupuestos y cuotas</h1>
            <p className="lead">
              Poner precios freelance no va de adivinar una cifra que suene razonable. Va de
              calcular tu suelo mensual, entender tus horas reales y convertir esa base en precios
              distintos segun el tipo de servicio: proyecto, landing, mantenimiento o soporte.
            </p>
            <div className="hero-badges" aria-label="Que cubre esta guia">
              <span className="hero-badge">Tarifa por hora</span>
              <span className="hero-badge">Precio por proyecto</span>
              <span className="hero-badge">Cuotas mensuales</span>
            </div>
            <div className="guide-cta">
              <Link href="/calculadoras-para-freelancers" className="tool-link">
                Ver calculadoras
              </Link>
              <Link href="/#flujo-recomendado" className="tool-link">
                Ver flujo recomendado
              </Link>
            </div>
          </div>

          <aside className="feature-card article-summary">
            <h2>Orden recomendado</h2>
            <ul className="article-list">
              <li>Calcula primero tu facturacion minima mensual.</li>
              <li>Convierte esa base en tarifa interna por hora.</li>
              <li>Adapta el precio al tipo de servicio que vendes.</li>
              <li>Deja alcance, revisiones y extras por escrito.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>Por que no existe un unico precio freelance correcto</h2>
          <p>
            Dos freelancers pueden cobrar distinto por el mismo servicio y ambos tener razon. Cambia
            su coste de vida, experiencia, velocidad, demanda, posicionamiento, riesgo, impuestos,
            herramientas, agenda y tipo de cliente.
          </p>
          <p>
            Por eso el precio correcto no sale de copiar una tabla ajena. Sale de conocer tu base
            economica y despues ajustar segun alcance, responsabilidad, plazo y valor del resultado.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> tu tarifa por hora es una referencia interna. El cliente
            compra un resultado, pero tu margen se protege con numeros.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Tipos de precio freelance">
          <article className="feature-card">
            <h2>Tarifa por hora</h2>
            <p>
              Sirve para calcular tu suelo y cobrar trabajo abierto. Es util en soporte, consultoria
              o tareas con alcance incierto, pero puede limitar el valor percibido si se usa sola.
            </p>
          </article>

          <article className="feature-card">
            <h2>Precio por proyecto</h2>
            <p>
              Encaja cuando hay entregables claros. Debe partir de horas reales, buffer, costes,
              margen, revisiones y limites de alcance para no convertirse en trabajo gratis.
            </p>
          </article>

          <article className="feature-card">
            <h2>Cuota mensual</h2>
            <p>
              Tiene sentido para soporte, mantenimiento o servicios recurrentes. Debe incluir horas,
              condiciones, urgencias, extras y reglas de consumo.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <div className="text-block">
            <h2>Metodo simple para calcular precios freelance</h2>
            <ol className="article-list article-list-ordered">
              <li>Define cuanto quieres ganar neto al mes.</li>
              <li>Suma costes fijos, herramientas, gestoria, seguros y margen de seguridad.</li>
              <li>Ten en cuenta impuestos, cuota y dinero que no sera ingreso disponible.</li>
              <li>Calcula tus horas facturables reales, no todas tus horas de trabajo.</li>
              <li>Obten una tarifa interna por hora para proteger el suelo.</li>
              <li>Adapta esa base al servicio: proyecto cerrado, landing o cuota mensual.</li>
              <li>Anade buffer por revisiones, gestion, reuniones, riesgo y urgencia.</li>
              <li>Presenta el precio con alcance, entregables, exclusiones y condiciones.</li>
            </ol>
            <p>
              Esta secuencia evita dos errores clasicos: cobrar solo por intuicion o convertir cada
              presupuesto en una guerra de precios contra alguien que tiene otra estructura de
              costes.
            </p>
          </div>

          <aside className="feature-card article-summary">
            <h2>Formula mental</h2>
            <p>
              Precio sano = base economica + horas reales + riesgo + margen + claridad de alcance.
            </p>
            <p>
              Si una de esas partes falta, el precio puede parecer competitivo, pero tu negocio se
              queda sin aire.
            </p>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <span className="eyebrow">Herramientas conectadas</span>
          <h2>Elige la calculadora segun el precio que necesitas decidir</h2>
        </div>
        <div className="container feature-grid" aria-label="Herramientas para precios freelance">
          {tools.map((tool) => (
            <article className="feature-card" key={tool.href}>
              <span className="tool-category">{tool.category}</span>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <p>
                <strong>Util cuando:</strong> {tool.bestWhen}
              </p>
              <a href={tool.trackingHref} className="tool-link">
                Abrir herramienta
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Flujo recomendado</span>
          <h2>No calcules todo en el mismo orden</h2>
          <p>
            La forma mas estable de poner precios es empezar por lo general y bajar a lo concreto.
            Primero tu suelo, luego el tipo de servicio, despues el alcance y al final las
            condiciones comerciales.
          </p>
        </div>
        <div className="container workflow-grid" aria-label="Flujo de precios freelance">
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
          <h2>Errores que bajan tus precios sin que te des cuenta</h2>
          <ol className="article-list article-list-ordered">
            <li>Usar todas tus horas semanales como si fueran facturables.</li>
            <li>Olvidar reuniones, gestion, revisiones, soporte y comunicacion.</li>
            <li>No separar IVA, IRPF, cuota, costes y dinero disponible.</li>
            <li>Meter cambios nuevos dentro de un precio cerrado ya aprobado.</li>
            <li>Regalar urgencias porque el cliente ya paga una cuota.</li>
            <li>No subir de plan cuando un cliente consume mas horas cada mes.</li>
          </ol>
          <p>
            Si el problema es elegir entre varios modelos de cobro, revisa la guia de{' '}
            <a href="https://www.cuantopresupuestar.es/precio-cerrado-o-por-horas-freelance?utm_source=paneldeherramientas&utm_medium=precios-freelance&utm_campaign=contextual_link">
              precio cerrado o por horas freelance
            </a>
            . Si necesitas una vision por calculadoras, entra en{' '}
            <Link href="/calculadoras-para-freelancers">calculadoras para freelancers</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Rutas de decision</span>
          <h2>Baja al tipo de precio que quieres resolver ahora</h2>
          <div className="feature-grid" aria-label="Rutas por tipo de precio">
            <article className="feature-card">
              <h3>Facturacion y tarifa por hora</h3>
              <p>Para saber cuanto necesitas facturar y que tarifa interna protege tu suelo.</p>
              <Link href="/mejores-herramientas-para-facturacion-autonomos" className="tool-link">
                Ver ruta de facturacion
              </Link>
            </article>

            <article className="feature-card">
              <h3>Presupuestos cerrados</h3>
              <p>Para proyectos con alcance, entregables, revisiones, fases y margen.</p>
              <Link
                href="/mejores-herramientas-para-presupuestos-freelance"
                className="tool-link"
              >
                Ver ruta de presupuestos
              </Link>
            </article>

            <article className="feature-card">
              <h3>Cuotas mensuales</h3>
              <p>Para soporte, mantenimiento web, horas incluidas, urgencias y contratos.</p>
              <Link href="/mejores-herramientas-para-mantenimiento-web" className="tool-link">
                Ver ruta de mantenimiento
              </Link>
            </article>

            <article className="feature-card">
              <h3>Landing pages</h3>
              <p>Para secciones, copy, formularios, integraciones, captacion y presupuesto.</p>
              <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
                Ver ruta de landing pages
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="precios-freelance-faq-title">
        <div className="container text-block">
          <h2 id="precios-freelance-faq-title">Preguntas frecuentes sobre precios freelance</h2>

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

    </main>
  );
}
