import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const sourceFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'components/DecisionGuide.tsx',
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/ToolDirectory.tsx',
];

describe('static accessibility safeguards', () => {
  it('does not introduce focus-trap patterns in static UI code', () => {
    const combinedSource = sourceFiles
      .map((filePath) => readFileSync(join(process.cwd(), filePath), 'utf8'))
      .join('\n');

    expect(combinedSource).not.toMatch(
      /onKeyDown|onKeyUp|onKeyPress|preventDefault|stopPropagation|tabIndex|aria-modal|role="dialog"|role="menu"|role="listbox"/,
    );
  });

  it('does not add dynamic content that would require focus management', () => {
    const combinedSource = sourceFiles
      .map((filePath) => readFileSync(join(process.cwd(), filePath), 'utf8'))
      .join('\n');

    expect(combinedSource).not.toMatch(
      /useState|useReducer|useEffect|useTransition|startTransition|setTimeout|setInterval|createPortal|appendChild|insertAdjacent|role="alert"|role="status"|aria-live|toast|modal|dialog/i,
    );
  });

  it('keeps the skip link before the main content target', () => {
    const layoutSource = readFileSync(join(process.cwd(), 'app/layout.tsx'), 'utf8');
    const homeSource = readFileSync(join(process.cwd(), 'app/page.tsx'), 'utf8');

    expect(layoutSource).toContain('href="#contenido-principal"');
    expect(homeSource).toContain('id="contenido-principal"');
  });
});
