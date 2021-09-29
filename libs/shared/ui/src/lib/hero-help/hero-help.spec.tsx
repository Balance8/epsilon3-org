import { render } from '@testing-library/react';

import HeroHelp from './hero-help';

describe('HeroHelp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeroHelp />);
    expect(baseElement).toBeTruthy();
  });
});
