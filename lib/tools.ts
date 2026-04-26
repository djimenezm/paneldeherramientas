export type ToolItem = {
  name: string;
  href: string;
  trackingHref: string;
  category: string;
  description: string;
  useCase: string;
  primaryQuestion: string;
  output: string;
  bestWhen: string;
  tags: string[];
  availability: 'Activa' | 'En despliegue';
  isLive: boolean;
};

export type FeaturedGuide = {
  title: string;
  href: string;
  trackingHref: string;
  category: string;
  description: string;
  relatedTool: string;
};

export type PricingWorkflowStep = {
  step: string;
  title: string;
  description: string;
  toolName: string;
  href: string;
  trackingHref: string;
  takeaway: string;
};

export const tools: ToolItem[] = [
  {
    name: 'Cuanto Facturar',
    href: 'https://www.cuantofacturar.es',
    trackingHref:
      'https://www.cuantofacturar.es?utm_source=paneldeherramientas&utm_medium=tool-directory&utm_campaign=tool_navigation',
    category: 'Facturación',
    description:
      'Calculadora para estimar cuánto necesitas facturar al mes y qué tarifa por hora encaja con tu objetivo neto.',
    useCase:
      'Autónomos y freelancers que quieren pasar de un objetivo mensual a una cifra de facturación defendible.',
    primaryQuestion: 'Quiero saber cuánto necesito facturar al mes.',
    output: 'Facturación objetivo, tarifa por hora y contexto fiscal orientativo.',
    bestWhen: 'Necesitas una referencia mensual antes de presupuestar o fijar precios.',
    tags: ['IRPF', 'IVA', 'Cuota de autónomos'],
    availability: 'Activa',
    isLive: true,
  },
  {
    name: 'Cuanto Presupuestar',
    href: 'https://www.cuantopresupuestar.es',
    trackingHref:
      'https://www.cuantopresupuestar.es?utm_source=paneldeherramientas&utm_medium=tool-directory&utm_campaign=tool_navigation',
    category: 'Presupuestos',
    description:
      'Herramienta para transformar un objetivo mensual y un alcance de trabajo en un presupuesto cerrado por proyecto.',
    useCase:
      'Freelancers que venden proyectos cerrados y necesitan un precio mínimo y un precio recomendado.',
    primaryQuestion: 'Quiero aterrizar un presupuesto cerrado por proyecto.',
    output: 'Precio mínimo, precio recomendado y margen defendible por proyecto.',
    bestWhen: 'Ya trabajas con entregables cerrados y necesitas una propuesta comercial más clara.',
    tags: ['Precio por proyecto', 'Margen', 'Buffer'],
    availability: 'Activa',
    isLive: true,
  },
  {
    name: 'Mantenimiento Web Mensual',
    href: 'https://www.mantenimientowebmensual.es',
    trackingHref:
      'https://www.mantenimientowebmensual.es?utm_source=paneldeherramientas&utm_medium=tool-directory&utm_campaign=tool_navigation',
    category: 'Retainers',
    description:
      'Calculadora para fijar una cuota mensual de mantenimiento web con horas incluidas, buffer y costes directos.',
    useCase:
      'Profesionales que ofrecen soporte recurrente y quieren defender una cuota mensual más estable.',
    primaryQuestion: 'Quiero definir una cuota mensual de mantenimiento o soporte.',
    output: 'Cuota mínima y cuota recomendada para mantenimiento recurrente.',
    bestWhen: 'Vendes retainers, soporte o mantenimiento mensual y no quieres improvisar la cuota.',
    tags: ['Mantenimiento', 'Cuota mensual', 'Horas incluidas'],
    availability: 'Activa',
    isLive: true,
  },
  {
    name: 'Cuanto Cobrar Landing Page',
    href: 'https://www.cuantocobrarlandingpage.es',
    trackingHref:
      'https://www.cuantocobrarlandingpage.es?utm_source=paneldeherramientas&utm_medium=tool-directory&utm_campaign=tool_navigation',
    category: 'Landing pages',
    description:
      'Calculadora especializada para poner precio a una landing page teniendo en cuenta secciones, integraciones, revisiones y copy.',
    useCase:
      'Freelancers que venden landings y quieren comprobar si su precio deja margen real.',
    primaryQuestion: 'Quiero poner precio a una landing page concreta.',
    output: 'Precio mínimo y recomendado para una landing según alcance y complejidad.',
    bestWhen: 'Tu servicio es una landing cerrada y quieres validar si el precio te protege.',
    tags: ['Landing page', 'Integraciones', 'Copywriting'],
    availability: 'Activa',
    isLive: true,
  },
];

function getToolByName(name: string) {
  const tool = tools.find((currentTool) => currentTool.name === name);

  if (!tool) {
    throw new Error(`Tool not found: ${name}`);
  }

  return tool;
}

function buildPanelTrackingUrl(href: string, medium: string, campaign: string) {
  return `${href}?utm_source=paneldeherramientas&utm_medium=${medium}&utm_campaign=${campaign}`;
}

export const pricingWorkflow: PricingWorkflowStep[] = [
  {
    step: '01',
    title: 'Calcula primero tu suelo mensual',
    description:
      'Empieza por saber cuánto necesitas facturar para que cualquier precio posterior tenga una base real.',
    toolName: 'Cuanto Facturar',
    href: getToolByName('Cuanto Facturar').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Facturar').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Sales con facturación objetivo, tarifa por hora y resumen copiable.',
  },
  {
    step: '02',
    title: 'Convierte esa base en presupuestos cerrados',
    description:
      'Usa horas, costes, buffer y margen para pasar de intuición a propuesta defendible por proyecto.',
    toolName: 'Cuanto Presupuestar',
    href: getToolByName('Cuanto Presupuestar').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Presupuestar').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Obtienes mínimo, recomendado y una nota corta para pegar en tu propuesta.',
  },
  {
    step: '03',
    title: 'Separa los ingresos recurrentes',
    description:
      'Si vendes soporte o mantenimiento, calcula una cuota mensual independiente de los proyectos cerrados.',
    toolName: 'Mantenimiento Web Mensual',
    href: getToolByName('Mantenimiento Web Mensual').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Mantenimiento Web Mensual').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Defines cuota mínima, cuota recomendada, horas incluidas y margen de negociación.',
  },
  {
    step: '04',
    title: 'Aterriza casos concretos como landing pages',
    description:
      'Cuando el servicio es muy específico, baja al detalle de secciones, integraciones, copy y revisiones.',
    toolName: 'Cuanto Cobrar Landing Page',
    href: getToolByName('Cuanto Cobrar Landing Page').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Cobrar Landing Page').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Te llevas precio recomendado, alcance resumido y límites para negociar.',
  },
];

export const featuredGuides: FeaturedGuide[] = [
  {
    title: 'Cuánto facturar para ganar 1500 euros netos',
    href: 'https://www.cuantofacturar.es/cuanto-facturar-autonomo-1500-euros',
    trackingHref:
      'https://www.cuantofacturar.es/cuanto-facturar-autonomo-1500-euros?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Facturación',
    description:
      'Convierte un primer objetivo neto en facturación mensual, tarifa por hora y suelo defendible.',
    relatedTool: 'Cuanto Facturar',
  },
  {
    title: 'Cuánto facturar para ganar 2500 euros netos',
    href: 'https://www.cuantofacturar.es/cuanto-facturar-autonomo-2500-euros',
    trackingHref:
      'https://www.cuantofacturar.es/cuanto-facturar-autonomo-2500-euros?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Facturación',
    description:
      'Convierte una meta intermedia en facturación mensual, tarifa por hora y filtro para revisar tus precios.',
    relatedTool: 'Cuanto Facturar',
  },
  {
    title: 'Cuánto facturar para ganar 3000 euros netos',
    href: 'https://www.cuantofacturar.es/cuanto-facturar-autonomo-3000-euros',
    trackingHref:
      'https://www.cuantofacturar.es/cuanto-facturar-autonomo-3000-euros?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Facturación',
    description:
      'Convierte un objetivo neto alto en facturación mensual, tarifa por hora y filtro para aceptar proyectos.',
    relatedTool: 'Cuanto Facturar',
  },
  {
    title: 'Ejemplo de presupuesto freelance',
    href: 'https://www.cuantopresupuestar.es/ejemplo-presupuesto-freelance',
    trackingHref:
      'https://www.cuantopresupuestar.es/ejemplo-presupuesto-freelance?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Presupuestos',
    description:
      'Mira una estructura práctica para presentar alcance, entregables, precio, pagos y exclusiones.',
    relatedTool: 'Cuanto Presupuestar',
  },
  {
    title: 'Precio cerrado o por horas freelance',
    href: 'https://www.cuantopresupuestar.es/precio-cerrado-o-por-horas-freelance',
    trackingHref:
      'https://www.cuantopresupuestar.es/precio-cerrado-o-por-horas-freelance?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Presupuestos',
    description:
      'Decide cuando vender por proyecto cerrado, por horas o por fases sin regalar margen ni mezclar alcances.',
    relatedTool: 'Cuanto Presupuestar',
  },
  {
    title: 'Presupuesto de desarrollo web freelance',
    href: 'https://www.cuantopresupuestar.es/presupuesto-desarrollo-web-freelance',
    trackingHref:
      'https://www.cuantopresupuestar.es/presupuesto-desarrollo-web-freelance?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Presupuestos',
    description:
      'Ordena alcance, hitos, revisiones, extras y margen antes de enviar una propuesta de desarrollo web.',
    relatedTool: 'Cuanto Presupuestar',
  },
  {
    title: 'Qué incluye un mantenimiento web mensual',
    href: 'https://www.mantenimientowebmensual.es/que-incluye-mantenimiento-web',
    trackingHref:
      'https://www.mantenimientowebmensual.es/que-incluye-mantenimiento-web?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Mantenimiento',
    description:
      'Separa tareas incluidas, soporte, límites y extras antes de vender una cuota mensual.',
    relatedTool: 'Mantenimiento Web Mensual',
  },
  {
    title: 'Mantenimiento web mensual vs bolsa de horas',
    href: 'https://www.mantenimientowebmensual.es/mantenimiento-web-vs-bolsa-horas',
    trackingHref:
      'https://www.mantenimientowebmensual.es/mantenimiento-web-vs-bolsa-horas?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Mantenimiento',
    description:
      'Decide cuándo vender cuota mensual, bolsa de horas o proyecto cerrado sin mezclar alcances.',
    relatedTool: 'Mantenimiento Web Mensual',
  },
  {
    title: 'Paquetes de mantenimiento web',
    href: 'https://www.mantenimientowebmensual.es/paquetes-mantenimiento-web',
    trackingHref:
      'https://www.mantenimientowebmensual.es/paquetes-mantenimiento-web?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Mantenimiento',
    description:
      'Estructura planes básico, profesional y avanzado con límites claros y extras fuera de cuota.',
    relatedTool: 'Mantenimiento Web Mensual',
  },
  {
    title: 'Ejemplo de presupuesto de landing page',
    href: 'https://www.cuantocobrarlandingpage.es/ejemplo-presupuesto-landing-page',
    trackingHref:
      'https://www.cuantocobrarlandingpage.es/ejemplo-presupuesto-landing-page?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Landing pages',
    description:
      'Presenta alcance, secciones, integraciones, revisiones, precio e IVA sin dejar huecos.',
    relatedTool: 'Cuanto Cobrar Landing Page',
  },
  {
    title: 'Precio landing page freelance',
    href: 'https://www.cuantocobrarlandingpage.es/precio-landing-page-freelance',
    trackingHref:
      'https://www.cuantocobrarlandingpage.es/precio-landing-page-freelance?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Landing pages',
    description:
      'Calcula y defiende el precio de una landing page según alcance, copy, integraciones y revisiones.',
    relatedTool: 'Cuanto Cobrar Landing Page',
  },
];

export const liveTools = tools.filter((tool) => tool.isLive);
export const pendingTools = tools.filter((tool) => !tool.isLive);
