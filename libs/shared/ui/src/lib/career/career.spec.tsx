import { render } from '@testing-library/react';

import Career from './career';

describe('Career', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Career />);
    expect(baseElement).toBeTruthy();
  });
});
