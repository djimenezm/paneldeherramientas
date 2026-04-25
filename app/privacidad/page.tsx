import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de privacidad',
  description: `Informacion general sobre privacidad y tratamiento de datos en ${siteConfig.name}.`,
};

export default function PrivacidadPage() {
  return (
    <main className="legal-page container">
      <h1>Politica de privacidad</h1>
      <div className="legal-card">
        <p>
          Responsable: <strong>{siteConfig.ownerName}</strong>
        </p>
        <p>Contacto para privacidad: actualmente no disponible en esta web.</p>
      </div>

      <section className="legal-section">
        <h2>Datos que se usan en esta version</h2>
        <p>
          En esta version no existe un formulario de registro, cuenta de usuario ni una base de
          datos propia asociada al uso del panel. El sitio se limita a mostrar un inventario de
          herramientas y a enlazar a apps publicas del mismo ecosistema.
        </p>
      </section>

      <section className="legal-section">
        <h2>Datos tecnicos y contacto</h2>
        <p>
          Como en cualquier servicio web, el proveedor de hosting puede tratar datos tecnicos
          imprescindibles para servir la pagina, como logs basicos de acceso, direccion IP o datos
          del navegador. En esta version del panel no se ofrece un canal publico de contacto
          directo desde la propia web.
        </p>
      </section>

      <section className="legal-section">
        <h2>Medicion basica de uso</h2>
        <p>
          Esta web utiliza Vercel Web Analytics para obtener estadisticas agregadas de visitas y
          paginas vistas. La finalidad es entender el uso general del panel y ver que herramientas
          reciben mas interes, sin identificar personalmente a los usuarios.
        </p>
      </section>

      <section className="legal-section">
        <h2>Base y finalidad</h2>
        <p>
          La finalidad del tratamiento es prestar la herramienta, atender comunicaciones directas y
          mantener la seguridad basica del servicio. Ademas, se realiza una medicion agregada del
          uso para conocer el rendimiento general de la web. No se realiza un tratamiento comercial
          de tus datos ni se crean perfiles publicitarios propios desde esta herramienta.
        </p>
      </section>

      <section className="legal-section">
        <h2>Tus derechos</h2>
        <p>
          Si en el futuro se habilita un canal publico de contacto para este panel, esta politica se
          actualizara para indicar como ejercer, cuando corresponda, los derechos de acceso,
          rectificacion, supresion u oposicion.
        </p>
      </section>
    </main>
  );
}
