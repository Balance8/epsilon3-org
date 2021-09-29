import { render } from '@testing-library/react';

import FeaturesGallery from './features-gallery';

describe('FeaturesGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesGallery />);
    expect(baseElement).toBeTruthy();
  });
});
