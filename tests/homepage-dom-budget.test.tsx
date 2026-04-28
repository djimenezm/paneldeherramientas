import { render } from '@testing-library/react';
import HomePage from '@/components/HomePage';

describe('homepage DOM budget', () => {
  it('keeps the main homepage markup compact', () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll('*').length).toBeLessThanOrEqual(320);
    expect(container.querySelectorAll('.compact-guide-links a').length).toBeLessThanOrEqual(12);
    expect(container.querySelector('.hero .lead')?.textContent?.length ?? 0).toBeLessThanOrEqual(
      120,
    );
  });
});
