import { render, screen } from '@testing-library/react';
import DecisionGuide from '@/components/DecisionGuide';

describe('DecisionGuide', () => {
  it('renders a compact comparison for the full catalog', () => {
    render(<DecisionGuide />);

    expect(screen.getByText('Compara el resultado que necesitas')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Facturar')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Presupuestar')).toBeInTheDocument();
    expect(screen.getAllByText('Comparativa rápida')).toHaveLength(1);
  });
});
