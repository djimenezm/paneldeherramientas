export const faqItems = [
  {
    question: '¿Qué es este panel?',
    answer:
      'Es una web central que reúne todas las herramientas públicas del ecosistema para freelancers y autónomos. Sirve como inventario y punto de entrada para elegir rápidamente la calculadora que mejor encaja con tu caso.',
  },
  {
    question: '¿Por qué separar las herramientas en apps distintas?',
    answer:
      'Porque cada problema tiene una lógica propia. Facturar como autónomo, presupuestar proyectos, fijar retainers o poner precio a una landing page no se resuelven igual y una app especializada suele ser más clara que una mega calculadora.',
  },
  {
    question: '¿Las herramientas son gratuitas?',
    answer:
      'Sí. El panel lista herramientas públicas y de uso libre. Algunas pueden estar en despliegue o evolucionar con nuevas páginas y funciones, pero la idea base es que sigan siendo accesibles.',
  },
  {
    question: '¿Están pensadas solo para España?',
    answer:
      'La mayoría nacen pensando en el contexto de España, especialmente cuando afectan a cuota de autónomos, IRPF o IVA. Aun así, algunas partes pueden servir como referencia general para otros mercados.',
  },
  {
    question: '¿Se irán añadiendo nuevas herramientas?',
    answer:
      'Sí. El panel está pensado para crecer con nuevas calculadoras y recursos. La idea es que puedas volver aquí y encontrar rápidamente qué herramientas están activas, cuáles son nuevas y cuáles están en despliegue.',
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
