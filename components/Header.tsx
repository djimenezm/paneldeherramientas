export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand">
          Panel de Herramientas
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="/#herramientas">Herramientas</a>
          <a href="/precios-freelance">Precios</a>
          <a href="/calculadoras-para-freelancers">Calculadoras</a>
          <a href="/#guias-destacadas">Guías</a>
          <a href="/herramientas-para-freelancers">Freelancers</a>
          <a href="/recursos-para-autonomos">Autónomos</a>
          <a href="/#como-funciona">Cómo usarlo</a>
          <a href="/#faq">FAQ</a>
        </nav>
      </div>
    </header>
  );
}
