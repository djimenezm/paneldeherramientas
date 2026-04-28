import { render } from '@testing-library/react';
import HomePage from '@/app/page';

describe('homepage DOM budget', () => {
  it('keeps the main homepage markup compact', () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll('*').length).toBeLessThanOrEqual(320);
    expect(container.querySelectorAll('.compact-guide-links a').length).toBeLessThanOrEqual(12);
  });
});
