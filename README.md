# Panel de Herramientas

Inventario publico de aplicaciones y calculadoras para freelancers y autonomos. Reune en una sola web las herramientas activas del ecosistema y sirve como punto de entrada comun.

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Arranque en local

```bash
npm install
npm run dev
```

Despues abre:

```bash
http://localhost:3005
```

## Variable de entorno

Para produccion, configura:

```bash
NEXT_PUBLIC_SITE_URL=https://www.paneldeherramientas.es
```

## Estructura

```text
panel-apps/
  app/
    aviso-legal/page.tsx
    cookies/page.tsx
    privacidad/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    FAQ.tsx
    Footer.tsx
    Header.tsx
    ToolDirectory.tsx
  lib/
    site.ts
    tools.ts
  public/
  .env.example
  .gitignore
  next-env.d.ts
  next.config.ts
  package.json
  README.md
  tsconfig.json
```
