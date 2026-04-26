import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <p>
            Copyright {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p>Titular: {siteConfig.ownerName}</p>
          <p className="footer-note">
            Panel publico con herramientas orientativas para freelancers y autonomos. Cada app puede
            tener sus propios matices de uso y limitaciones.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/#guias-destacadas">Guias destacadas</Link>
          <Link href="/herramientas-para-freelancers">Freelancers</Link>
          <Link href="/recursos-para-autonomos">Autonomos</Link>
          <Link href="/mejores-herramientas-para-presupuestos-freelance">Presupuestos</Link>
          <Link href="/mejores-herramientas-para-mantenimiento-web">Mantenimiento</Link>
          <Link href="/mejores-herramientas-para-landing-pages">Landing pages</Link>
          <Link href="/mejores-herramientas-para-facturacion-autonomos">Facturacion</Link>
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
