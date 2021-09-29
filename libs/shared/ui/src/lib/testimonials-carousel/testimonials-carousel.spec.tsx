import { render } from '@testing-library/react';

import TestimonialsCarousel from './testimonials-carousel';

describe('TestimonialsCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestimonialsCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
