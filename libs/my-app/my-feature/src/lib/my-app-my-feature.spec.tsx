import { render } from '@testing-library/react';

import MyAppMyFeature from './my-app-my-feature';

describe('MyAppMyFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyAppMyFeature />);
    expect(baseElement).toBeTruthy();
  });
});
