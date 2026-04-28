import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function collectPageFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectPageFiles(fullPath);
    }

    return entry.name === 'page.tsx' ? [fullPath] : [];
  });
}

const pageFiles = collectPageFiles(join(process.cwd(), 'app'));
const sourceFiles = [
  ...pageFiles,
  join(process.cwd(), 'app/layout.tsx'),
  join(process.cwd(), 'components/DecisionGuide.tsx'),
  join(process.cwd(), 'components/Footer.tsx'),
  join(process.cwd(), 'components/Header.tsx'),
  join(process.cwd(), 'components/ToolDirectory.tsx'),
];

function readSource(filePath: string) {
  return readFileSync(filePath, 'utf8');
}

describe('static accessibility safeguards', () => {
  it('does not introduce focus-trap patterns in static UI code', () => {
    const combinedSource = sourceFiles
      .map((filePath) => readSource(filePath))
      .join('\n');

    expect(combinedSource).not.toMatch(
      /onKeyDown|onKeyUp|onKeyPress|preventDefault|stopPropagation|tabIndex|aria-modal|role="dialog"|role="menu"|role="listbox"/,
    );
  });

  it('does not add dynamic content that would require focus management', () => {
    const combinedSource = sourceFiles
      .map((filePath) => readSource(filePath))
      .join('\n');

    expect(combinedSource).not.toMatch(
      /useState|useReducer|useEffect|useTransition|startTransition|setTimeout|setInterval|createPortal|appendChild|insertAdjacent|role="alert"|role="status"|aria-live|toast|modal|dialog/i,
    );
  });

  it('keeps the skip link before the main content target', () => {
    const layoutSource = readSource(join(process.cwd(), 'app/layout.tsx'));

    expect(layoutSource).toContain('href="#contenido-principal"');

    for (const pageFile of pageFiles) {
      expect(readSource(pageFile)).toMatch(/<main[^>]*id="contenido-principal"/);
    }
  });

  it('keeps navigation landmarks outside page main content', () => {
    const layoutSource = readSource(join(process.cwd(), 'app/layout.tsx'));
    const headerIndex = layoutSource.indexOf('<Header />');
    const childrenIndex = layoutSource.indexOf('{children}');
    const footerIndex = layoutSource.indexOf('<Footer />');

    expect(headerIndex).toBeGreaterThan(-1);
    expect(footerIndex).toBeGreaterThan(-1);
    expect(headerIndex).toBeLessThan(childrenIndex);
    expect(childrenIndex).toBeLessThan(footerIndex);

    for (const pageFile of pageFiles) {
      const pageSource = readSource(pageFile);

      expect(pageSource).not.toMatch(/<Header \/>|<Footer \/>/);
      expect(pageSource).not.toMatch(/@\/components\/Header|@\/components\/Footer/);
    }
  });
});
