import { render } from '@testing-library/react';

import TestimonialsCircles from './testimonials-circles';

describe('TestimonialsCircles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsCircles />);
    expect(baseElement).toBeTruthy();
  });
});
