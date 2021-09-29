import { render } from '@testing-library/react';

import RelatedPosts from './related-posts';

describe('RelatedPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RelatedPosts />);
    expect(baseElement).toBeTruthy();
  });
});
