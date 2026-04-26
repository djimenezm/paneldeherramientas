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
    category: 'Facturacion',
    description:
      'Calculadora para estimar cuanto necesitas facturar al mes y que tarifa por hora encaja con tu objetivo neto.',
    useCase:
      'Autonomos y freelancers que quieren pasar de un objetivo mensual a una cifra de facturacion defendible.',
    primaryQuestion: 'Quiero saber cuanto necesito facturar al mes.',
    output: 'Facturacion objetivo, tarifa por hora y contexto fiscal orientativo.',
    bestWhen: 'Necesitas una referencia mensual antes de presupuestar o fijar precios.',
    tags: ['IRPF', 'IVA', 'Cuota de autonomos'],
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
      'Freelancers que venden proyectos cerrados y necesitan un precio minimo y un precio recomendado.',
    primaryQuestion: 'Quiero aterrizar un presupuesto cerrado por proyecto.',
    output: 'Precio minimo, precio recomendado y margen defendible por proyecto.',
    bestWhen: 'Ya trabajas con entregables cerrados y necesitas una propuesta comercial mas clara.',
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
      'Profesionales que ofrecen soporte recurrente y quieren defender una cuota mensual mas estable.',
    primaryQuestion: 'Quiero definir una cuota mensual de mantenimiento o soporte.',
    output: 'Cuota minima y cuota recomendada para mantenimiento recurrente.',
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
    output: 'Precio minimo y recomendado para una landing segun alcance y complejidad.',
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
      'Empieza por saber cuanto necesitas facturar para que cualquier precio posterior tenga una base real.',
    toolName: 'Cuanto Facturar',
    href: getToolByName('Cuanto Facturar').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Facturar').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Sales con facturacion objetivo, tarifa por hora y resumen copiable.',
  },
  {
    step: '02',
    title: 'Convierte esa base en presupuestos cerrados',
    description:
      'Usa horas, costes, buffer y margen para pasar de intuicion a propuesta defendible por proyecto.',
    toolName: 'Cuanto Presupuestar',
    href: getToolByName('Cuanto Presupuestar').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Presupuestar').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Obtienes minimo, recomendado y una nota corta para pegar en tu propuesta.',
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
    takeaway: 'Defines cuota minima, cuota recomendada, horas incluidas y margen de negociacion.',
  },
  {
    step: '04',
    title: 'Aterriza casos concretos como landing pages',
    description:
      'Cuando el servicio es muy especifico, baja al detalle de secciones, integraciones, copy y revisiones.',
    toolName: 'Cuanto Cobrar Landing Page',
    href: getToolByName('Cuanto Cobrar Landing Page').href,
    trackingHref: buildPanelTrackingUrl(
      getToolByName('Cuanto Cobrar Landing Page').href,
      'pricing-workflow',
      'workflow_sequence',
    ),
    takeaway: 'Te llevas precio recomendado, alcance resumido y limites para negociar.',
  },
];

export const featuredGuides: FeaturedGuide[] = [
  {
    title: 'Cuanto facturar para ganar 3000 euros netos',
    href: 'https://www.cuantofacturar.es/cuanto-facturar-autonomo-3000-euros',
    trackingHref:
      'https://www.cuantofacturar.es/cuanto-facturar-autonomo-3000-euros?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Facturacion',
    description:
      'Convierte un objetivo neto alto en facturacion mensual, tarifa por hora y filtro para aceptar proyectos.',
    relatedTool: 'Cuanto Facturar',
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
    title: 'Paquetes de mantenimiento web',
    href: 'https://www.mantenimientowebmensual.es/paquetes-mantenimiento-web',
    trackingHref:
      'https://www.mantenimientowebmensual.es/paquetes-mantenimiento-web?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Mantenimiento',
    description:
      'Estructura planes basico, profesional y avanzado con limites claros y extras fuera de cuota.',
    relatedTool: 'Mantenimiento Web Mensual',
  },
  {
    title: 'Precio landing page freelance',
    href: 'https://www.cuantocobrarlandingpage.es/precio-landing-page-freelance',
    trackingHref:
      'https://www.cuantocobrarlandingpage.es/precio-landing-page-freelance?utm_source=paneldeherramientas&utm_medium=hub-guide&utm_campaign=featured_guides',
    category: 'Landing pages',
    description:
      'Calcula y defiende el precio de una landing page segun alcance, copy, integraciones y revisiones.',
    relatedTool: 'Cuanto Cobrar Landing Page',
  },
];

export const liveTools = tools.filter((tool) => tool.isLive);
export const pendingTools = tools.filter((tool) => !tool.isLive);
