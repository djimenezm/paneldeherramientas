import { render, screen } from '@testing-library/react';
import DecisionGuide from '@/components/DecisionGuide';

describe('DecisionGuide', () => {
  it('renders quick routes and comparison rows for the full catalog', () => {
    render(<DecisionGuide />);

    expect(screen.getByText('Empieza por la pregunta correcta')).toBeInTheDocument();
    expect(screen.getByText('Quiero saber cuánto necesito facturar al mes.')).toBeInTheDocument();
    expect(screen.getByText('Quiero aterrizar un presupuesto cerrado por proyecto.')).toBeInTheDocument();
    expect(screen.getAllByText('Comparativa rápida')).toHaveLength(1);
  });
});
