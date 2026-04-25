export const faqItems = [
  {
    question: 'Que es este panel?',
    answer:
      'Es una web central que reune todas las herramientas publicas del ecosistema para freelancers y autonomos. Sirve como inventario y punto de entrada para elegir rapidamente la calculadora que mejor encaja con tu caso.',
  },
  {
    question: 'Por que separar las herramientas en apps distintas?',
    answer:
      'Porque cada problema tiene una logica propia. Facturar como autonomo, presupuestar proyectos, fijar retainers o poner precio a una landing page no se resuelven igual y una app especializada suele ser mas clara que una mega calculadora.',
  },
  {
    question: 'Las herramientas son gratuitas?',
    answer:
      'Si. El panel lista herramientas publicas y de uso libre. Algunas pueden estar en despliegue o evolucionar con nuevas paginas y funciones, pero la idea base es que sigan siendo accesibles.',
  },
  {
    question: 'Estan pensadas solo para Espana?',
    answer:
      'La mayoria nacen pensando en el contexto de Espana, especialmente cuando afectan a cuota de autonomos, IRPF o IVA. Aun asi, algunas partes pueden servir como referencia general para otros mercados.',
  },
  {
    question: 'Se iran anadiendo nuevas herramientas?',
    answer:
      'Si. El panel esta pensado para crecer con nuevas calculadoras y recursos. La idea es que puedas volver aqui y encontrar rapidamente que herramientas estan activas, cuales son nuevas y cuales estan en despliegue.',
  },
] as const;

export default function FAQ() {
  return (
    <section className="section alt" id="faq" aria-labelledby="faq-title">
      <div className="container text-block">
        <h2 id="faq-title">Preguntas frecuentes</h2>

        <div className="faq-list">
          {faqItems.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
