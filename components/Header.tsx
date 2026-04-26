import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Panel de Herramientas
        </Link>

        <nav className="nav" aria-label="Navegación principal">
          <Link href="/#herramientas">Herramientas</Link>
          <Link href="/#guias-destacadas">Guías</Link>
          <Link href="/herramientas-para-freelancers">Freelancers</Link>
          <Link href="/recursos-para-autonomos">Autónomos</Link>
          <Link href="/#como-funciona">Cómo usarlo</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
