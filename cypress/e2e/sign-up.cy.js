describe('SignUpPage', () => {
  it('should sign up', () => {
    cy.visit('http://d1hrwqmvzrqllr.cloudfront.net/auth/sign-up')

    cy.findByPlaceholderText('Enter Email').type(`zlong+${(new Date()).getTime()}@outlook.com`)
    cy.findByPlaceholderText('Password').type('password')
    cy.findByPlaceholderText('Repeat Password').type('password')
    cy.findByRole('button', { name: 'Sign up' }).click()

    cy.url().should('eq', 'http://d1hrwqmvzrqllr.cloudfront.net/')
  })
})
