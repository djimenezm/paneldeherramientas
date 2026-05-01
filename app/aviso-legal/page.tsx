import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Aviso legal',
  description: `Condiciones de uso y limitacion de responsabilidad de ${siteConfig.name}.`,
  alternates: {
    canonical: '/aviso-legal',
  },
};

export default function AvisoLegalPage() {
  return (
    <main id="contenido-principal" className="legal-page container">
      <h1>Aviso legal</h1>
      <div className="legal-card">
        <p>
          Titular del sitio: <strong>{siteConfig.ownerName}</strong>
        </p>
        <p>Ambito de actividad: {siteConfig.country}</p>
        <p>Contacto publico: actualmente no disponible en esta web.</p>
      </div>

      <section className="legal-section">
        <h2>Objeto del sitio</h2>
        <p>
          Este sitio actua como panel publico e inventario de herramientas digitales orientadas a
          freelancers y autonomos. Puede enlazar a calculadoras y utilidades propias alojadas en
          otros dominios del mismo ecosistema. La informacion ofrecida en este panel y en las apps
          enlazadas se facilita con fines informativos y no sustituye el asesoramiento profesional
          fiscal, contable, comercial, contractual o legal.
        </p>
      </section>

      <section className="legal-section">
        <h2>Condiciones de uso</h2>
        <p>
          Al utilizar esta web aceptas hacer un uso adecuado de sus contenidos y no emplearla para
          actividades ilicitas, fraudulentas o que puedan afectar al funcionamiento del servicio.
        </p>
      </section>

      <section className="legal-section">
        <h2>Limitacion de responsabilidad</h2>
        <p>
          El titular no garantiza la disponibilidad permanente de todos los enlaces, subdominios o
          aplicaciones listadas ni la ausencia de errores, omisiones o desviaciones en los
          resultados de las herramientas enlazadas. Cada utilidad debe entenderse como orientativa y
          su uso queda bajo la responsabilidad del usuario.
        </p>
      </section>

      <section className="legal-section">
        <h2>Propiedad intelectual</h2>
        <p>
          Los textos, la estructura de la web y los elementos propios de esta herramienta pertenecen
          a su titular o se usan con autorizacion. No se permite su reproduccion total o parcial con
          fines comerciales sin permiso previo.
        </p>
      </section>
    </main>
  );
}
