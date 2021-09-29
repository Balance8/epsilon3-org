import { render } from '@testing-library/react';

import BlogSingle from './blog-single';

describe('BlogSingle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogSingle />);
    expect(baseElement).toBeTruthy();
  });
});
