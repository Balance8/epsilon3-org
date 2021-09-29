import { render } from '@testing-library/react';

import FeaturedPosts from './featured-posts';

describe('FeaturedPosts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedPosts />);
    expect(baseElement).toBeTruthy();
  });
});
