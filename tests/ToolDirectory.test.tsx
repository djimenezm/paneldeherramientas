import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToolDirectory from '@/components/ToolDirectory';

describe('ToolDirectory', () => {
  it('renders the four tools as available entries', () => {
    render(<ToolDirectory />);

    expect(screen.getByText('Cuanto Facturar')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Presupuestar')).toBeInTheDocument();
    expect(screen.getByText('Mantenimiento Web Mensual')).toBeInTheDocument();
    expect(screen.getByText('Cuanto Cobrar Landing Page')).toBeInTheDocument();
    expect(screen.getAllByText('Activa')).toHaveLength(4);
  });

  it('filters tools by search term', async () => {
    const user = userEvent.setup();

    render(<ToolDirectory />);

    await user.type(screen.getByLabelText('Buscar herramienta'), 'mantenimiento');

    expect(screen.getByText('Mantenimiento Web Mensual')).toBeInTheDocument();
    expect(screen.queryByText('Cuanto Facturar')).not.toBeInTheDocument();
    expect(screen.getByText('Mostrando 1 herramienta.')).toBeInTheDocument();
  });
});
