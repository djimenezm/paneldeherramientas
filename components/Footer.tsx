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
            Panel público con herramientas orientativas para freelancers y autónomos. Cada app puede
            tener sus propios matices de uso y limitaciones.
          </p>
        </div>
        <div className="footer-links">
          <a href="/#guias-destacadas">Guías destacadas</a>
          <a href="/precios-freelance">Precios freelance</a>
          <a href="/calculadoras-para-freelancers">Calculadoras</a>
          <a href="/herramientas-para-freelancers">Freelancers</a>
          <a href="/recursos-para-autonomos">Autónomos</a>
          <a href="/mejores-herramientas-para-presupuestos-freelance">Presupuestos</a>
          <a href="/mejores-herramientas-para-mantenimiento-web">Mantenimiento</a>
          <a href="/mejores-herramientas-para-landing-pages">Landing pages</a>
          <a href="/mejores-herramientas-para-facturacion-autonomos">Facturación</a>
          <a href="/aviso-legal">Aviso legal</a>
          <a href="/privacidad">Privacidad</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
