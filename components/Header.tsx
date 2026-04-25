import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          Panel de Herramientas
        </Link>

        <nav className="nav" aria-label="Navegacion principal">
          <Link href="/#herramientas">Herramientas</Link>
          <Link href="/#como-funciona">Como usarlo</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}
