import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getSiteUrl, siteConfig } from '@/lib/site';

const route = '/herramientas-para-freelancers';
const title = 'Herramientas para freelancers y autonomos digitales';
const description =
  'Seleccion practica de herramientas y calculadoras para freelancers y autonomos: facturacion, presupuestos, cuotas mensuales, landing pages y recursos para decidir mejor.';

const faqItems = [
  {
    question: 'Que herramientas necesita de verdad un freelance para empezar?',
    answer:
      'Como minimo, suele necesitar una forma clara de fijar precios, una herramienta para presupuestar y una solucion para ordenar la facturacion. El resto depende de su servicio y de la complejidad del negocio.',
  },
  {
    question: 'Es mejor usar una sola herramienta para todo o varias mas pequenas?',
    answer:
      'Depende del perfil. Muchas veces varias herramientas pequenas y especializadas dan mas claridad que una sola app enorme, sobre todo cuando estas definiendo precios o validando distintos tipos de servicios.',
  },
  {
    question: 'Esta pagina recomienda herramientas de pago?',
    answer:
      'Esta pagina funciona como recurso editorial del ecosistema y prioriza la utilidad. Algunas recomendaciones pueden evolucionar con el tiempo, pero la idea base es ayudarte a entender que tipo de herramienta te conviene segun la pregunta que quieres resolver.',
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: route,
  },
  keywords: [
    'herramientas para freelancers',
    'herramientas para autonomos digitales',
    'apps para freelancers espana',
    'recursos para autonomos',
    'herramientas para presupuestar y facturar',
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

export default function HerramientasParaFreelancersPage() {
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
        id="herramientas-freelancers-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="herramientas-freelancers-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="herramientas-freelancers-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="hero">
        <div className="container article-layout">
          <div className="text-block">
            <span className="eyebrow">Recurso del ecosistema</span>
            <h1>Herramientas para freelancers y autonomos digitales</h1>
            <p className="lead">
              No hace falta montar una pila enorme de software desde el primer dia. Lo que suele
              hacer mas diferencia es tener claras tres cosas: cuanto deberias cobrar, como
              presentar mejor ese precio y con que herramienta ordenar luego la parte operativa.
            </p>
            <div className="hero-badges" aria-label="Que cubre este recurso">
              <span className="hero-badge">Facturacion</span>
              <span className="hero-badge">Presupuestos</span>
              <span className="hero-badge">Servicios recurrentes</span>
            </div>
          <div className="guide-cta">
            <Link href="/calculadoras-para-freelancers" className="tool-link">
              Ver calculadoras para freelancers
            </Link>
            <Link href="/#herramientas" className="tool-link">
              Ver herramientas del panel
            </Link>
            <Link href="/recursos-para-autonomos" className="tool-link">
              Ver recursos para autonomos
            </Link>
            <Link href="/mejores-herramientas-para-presupuestos-freelance" className="tool-link">
              Ver herramientas para presupuestos
            </Link>
            <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
              Ver herramientas para landing pages
            </Link>
          </div>
        </div>

          <aside className="feature-card article-summary">
            <h2>Como usar esta pagina</h2>
            <ul className="article-list">
              <li>Empieza por la pregunta que quieres resolver hoy.</li>
              <li>Luego entra en la herramienta o guia mas especifica.</li>
              <li>Evita montar una pila de software antes de fijar tu precio.</li>
              <li>Usa el panel como mapa para no perder contexto entre herramientas.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>Si eres freelance, no todas las herramientas resuelven el mismo problema</h2>
          <p>
            Hay herramientas para decidir mejor tus precios, herramientas para convertir ese precio
            en un presupuesto o una propuesta y herramientas para ordenar la operativa del negocio
            una vez que ya estas facturando.
          </p>
          <p>
            El error tipico es empezar por la parte operativa sin haber resuelto antes la parte
            economica. Si no sabes cuanto necesitas facturar, ningun software de facturacion te va
            a arreglar un precio mal planteado.
          </p>
          <div className="disclaimer-box">
            <strong>Idea clave:</strong> primero define tu numero, despues tu propuesta y solo
            despues tu stack operativo.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-grid" aria-label="Tipos de herramientas por necesidad">
          <article className="feature-card">
            <h2>1. Para saber cuanto cobrar</h2>
            <p>
              Este es el bloque mas importante. Si no sabes cual es tu suelo economico, es facil
              aceptar proyectos o cuotas que parecen razonables pero dejan poco margen.
            </p>
          </article>

          <article className="feature-card">
            <h2>2. Para convertirlo en una propuesta</h2>
            <p>
              Una vez tienes una cifra sana, necesitas convertirla en presupuesto, propuesta
              comercial, entregables y condiciones claras para defenderla mejor.
            </p>
          </article>

          <article className="feature-card">
            <h2>3. Para ordenar la operativa</h2>
            <p>
              Facturacion, gastos, cobros y parte normativa empiezan a pesar mas cuando ya estas
              trabajando con clientes y no quieres perder tiempo en tareas administrativas.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Recursos clave</span>
          <h2>Empieza por la necesidad que mas te bloquea hoy</h2>
        </div>
        <div className="container feature-grid" aria-label="Recursos destacados del ecosistema">
          <article className="feature-card">
            <h3>Si necesitas saber cuanto facturar</h3>
            <p>
              Empieza por <a href="https://www.cuantofacturar.es">Cuanto Facturar</a> y refuerzalo
              con la guia de{' '}
              <a href="https://www.cuantofacturar.es/mejores-programas-facturacion-autonomos">
                mejores programas de facturacion para autonomos
              </a>
              .
            </p>
          </article>

          <article className="feature-card">
            <h3>Si necesitas presupuestar mejor un proyecto</h3>
            <p>
              Ve a <a href="https://www.cuantopresupuestar.es">Cuanto Presupuestar</a> y apoyalo
              con la{' '}
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
            <h3>Si tu servicio es una landing</h3>
            <p>
              Usa{' '}
              <a href="https://www.cuantocobrarlandingpage.es">Cuanto Cobrar Landing Page</a> para
              aterrizar mejor el precio de un servicio muy concreto y no mezclarlo con proyectos mas
              amplios.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>Que orden suele ser mas sano para montar tu stack</h2>
          <ol className="article-list article-list-ordered">
            <li>Primero define cuanto necesitas facturar o cobrar.</li>
            <li>Despues convierte ese numero en presupuesto o propuesta.</li>
            <li>Luego ordena la facturacion y la operativa con software.</li>
            <li>Y solo cuando el proceso esta estable, anade capas extra.</li>
          </ol>
          <p>
            Ese orden parece simple, pero suele evitar bastante friccion. Muchas veces el problema
            no es que falte software, sino que todavia no esta claro el precio base del negocio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <span className="eyebrow">Siguiente paso</span>
          <h2>Usa el panel como mapa y las apps como herramientas especializadas</h2>
          <p>
            Si vuelves aqui dentro de unos dias, esta pagina deberia ayudarte a entrar mas rapido en
            la herramienta correcta segun la duda que tengas: facturacion, presupuesto, mantenimiento
            o servicios concretos.
          </p>
          <p>
            Si tu foco esta mas en la operativa, la facturacion o el dia a dia de un negocio como
            autonomo, revisa tambien la pagina de{' '}
            <Link href="/recursos-para-autonomos">recursos para autonomos</Link>.
          </p>
          <p>
            Y si quieres centrarte solo en la parte de presupuestos, plantillas y propuestas, entra
            tambien en{' '}
            <Link href="/mejores-herramientas-para-presupuestos-freelance">
              mejores herramientas para presupuestos freelance
            </Link>
            .
          </p>
          <div className="guide-cta">
            <Link href="/#herramientas" className="tool-link">
              Volver al directorio
            </Link>
            <Link href="/mejores-herramientas-para-landing-pages" className="tool-link">
              Ver herramientas para landing pages
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="herramientas-freelancers-faq-title">
        <div className="container text-block">
          <h2 id="herramientas-freelancers-faq-title">
            Preguntas frecuentes sobre herramientas para freelancers
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
