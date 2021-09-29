import { render } from '@testing-library/react';

import CtaContact from './cta-contact';

describe('CtaContact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CtaContact />);
    expect(baseElement).toBeTruthy();
  });
});
