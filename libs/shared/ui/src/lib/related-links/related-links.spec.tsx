import { render } from '@testing-library/react';

import RelatedLinks from './related-links';

describe('RelatedLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedLinks />);
    expect(baseElement).toBeTruthy();
  });
});
