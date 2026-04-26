import sitemap from '@/app/sitemap';

describe('sitemap', () => {
  it('includes the public hub routes', () => {
    const paths = sitemap().map((entry) => new URL(entry.url).pathname);

    expect(paths).toContain('/');
    expect(paths).toContain('/herramientas-para-freelancers');
    expect(paths).toContain('/recursos-para-autonomos');
    expect(paths).toContain('/mejores-herramientas-para-presupuestos-freelance');
    expect(paths).toContain('/mejores-herramientas-para-mantenimiento-web');
    expect(paths).toContain('/mejores-herramientas-para-landing-pages');
    expect(paths).toContain('/mejores-herramientas-para-facturacion-autonomos');
  });
});
