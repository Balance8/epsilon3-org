import { render } from '@testing-library/react';

import HeroBlog from './hero-blog';

describe('HeroBlog', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroBlog />);
    expect(baseElement).toBeTruthy();
  });
});
