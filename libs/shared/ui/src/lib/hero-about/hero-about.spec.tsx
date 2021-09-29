import { render } from '@testing-library/react';

import HeroAbout from './hero-about';

describe('HeroAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroAbout />);
    expect(baseElement).toBeTruthy();
  });
});
