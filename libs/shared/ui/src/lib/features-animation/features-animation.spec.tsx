import { render } from '@testing-library/react';

import FeaturesAnimation from './features-animation';

describe('FeaturesAnimation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesAnimation />);
    expect(baseElement).toBeTruthy();
  });
});
