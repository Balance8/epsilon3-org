import { render } from '@testing-library/react';

import VideoTestimonial from './video-testimonial';

describe('VideoTestimonial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VideoTestimonial />);
    expect(baseElement).toBeTruthy();
  });
});
