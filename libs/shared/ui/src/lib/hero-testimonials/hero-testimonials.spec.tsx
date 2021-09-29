import { render } from '@testing-library/react';

import HeroTestimonials from './hero-testimonials';

describe('HeroTestimonials', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroTestimonials />);
    expect(baseElement).toBeTruthy();
  });
});
