import { render, screen } from '@testing-library/react';
import DecisionGuide from '@/components/DecisionGuide';

describe('DecisionGuide', () => {
  it('renders quick routes and comparison rows for the full catalog', () => {
    render(<DecisionGuide />);

    expect(screen.getByText('Empieza por la pregunta correcta')).toBeInTheDocument();
    expect(screen.getByText('Quiero saber cuanto necesito facturar al mes.')).toBeInTheDocument();
    expect(screen.getByText('Quiero aterrizar un presupuesto cerrado por proyecto.')).toBeInTheDocument();
    expect(screen.getAllByText('Comparativa rapida')).toHaveLength(1);
  });
});
