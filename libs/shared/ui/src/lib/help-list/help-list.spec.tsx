import { render } from '@testing-library/react';

import HelpList from './help-list';

describe('HelpList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HelpList />);
    expect(baseElement).toBeTruthy();
  });
});
