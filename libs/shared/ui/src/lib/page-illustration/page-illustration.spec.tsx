import { render } from '@testing-library/react';

import PageIllustration from './page-illustration';

describe('PageIllustration', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageIllustration />);
    expect(baseElement).toBeTruthy();
  });
});
