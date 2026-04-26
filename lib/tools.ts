export type ToolItem = {
  name: string;
  href: string;
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
  category: string;
  description: string;
  relatedTool: string;
};

export const tools: ToolItem[] = [
  {
    name: 'Cuanto Facturar',
    href: 'https://www.cuantofacturar.es',
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

export const featuredGuides: FeaturedGuide[] = [
  {
    title: 'Cuanto facturar para ganar 3000 euros netos',
    href: 'https://www.cuantofacturar.es/cuanto-facturar-autonomo-3000-euros',
    category: 'Facturacion',
    description:
      'Convierte un objetivo neto alto en facturacion mensual, tarifa por hora y filtro para aceptar proyectos.',
    relatedTool: 'Cuanto Facturar',
  },
  {
    title: 'Presupuesto de desarrollo web freelance',
    href: 'https://www.cuantopresupuestar.es/presupuesto-desarrollo-web-freelance',
    category: 'Presupuestos',
    description:
      'Ordena alcance, hitos, revisiones, extras y margen antes de enviar una propuesta de desarrollo web.',
    relatedTool: 'Cuanto Presupuestar',
  },
  {
    title: 'Paquetes de mantenimiento web',
    href: 'https://www.mantenimientowebmensual.es/paquetes-mantenimiento-web',
    category: 'Mantenimiento',
    description:
      'Estructura planes basico, profesional y avanzado con limites claros y extras fuera de cuota.',
    relatedTool: 'Mantenimiento Web Mensual',
  },
  {
    title: 'Precio landing page freelance',
    href: 'https://www.cuantocobrarlandingpage.es/precio-landing-page-freelance',
    category: 'Landing pages',
    description:
      'Calcula y defiende el precio de una landing page segun alcance, copy, integraciones y revisiones.',
    relatedTool: 'Cuanto Cobrar Landing Page',
  },
];

export const liveTools = tools.filter((tool) => tool.isLive);
export const pendingTools = tools.filter((tool) => !tool.isLive);
