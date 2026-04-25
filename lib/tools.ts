export type ToolItem = {
  name: string;
  href: string;
  category: string;
  description: string;
  useCase: string;
  tags: string[];
  availability: 'Activa' | 'En despliegue';
  isLive: boolean;
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
    tags: ['Landing page', 'Integraciones', 'Copywriting'],
    availability: 'Activa',
    isLive: true,
  },
];

export const liveTools = tools.filter((tool) => tool.isLive);
export const pendingTools = tools.filter((tool) => !tool.isLive);
