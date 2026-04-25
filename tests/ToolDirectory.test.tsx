import { render, screen } from '@testing-library/react';
import ToolDirectory from '@/components/ToolDirectory';

describe('ToolDirectory', () => {
  it('renders the four tools as available entries', () => {
    render(<ToolDirectory />);

    expect(screen.getByText('Cuanto Facturar')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Presupuestar')).toBeInTheDocument();
    expect(screen.getByText('Mantenimiento Web Mensual')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Cobrar Landing Page')).toBeInTheDocument();
    expect(screen.getAllByText('Activa')).toHaveLength(4);
    expect(screen.queryByText('Disponible muy pronto')).not.toBeInTheDocument();
  });
});
