import { getGreeting } from '../support/app.po';

describe('my-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to my-app-my-feature!');
  });
});
