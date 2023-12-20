const apiURL = 'https://jsonplaceholder.cypress.io'
describe('Test api to {JSON} Placeholder', () => {

  it('should successfully get a posts with id 3', () => {
    cy.fixture('apiData').then((apiData) => {
      cy.request('GET', `${apiURL}/posts/3`)
        .then((response) => {
          cy.assertResponse(response)
          cy.assertPostEquality(response, apiData[2])
        })
    })
  })

  it('should get all posts list', () => {
    cy.fixture('apiData').then((apiData) => {
      cy.request('GET', `${apiURL}/posts`)
        .then((response) => {
          expect(response.body).to.have.length(100)
          cy.assertResponse(response)
          cy.assertPostEquality(response, apiData)
        })
    })
  })

  it('should create a new post', () => {
    cy.request('POST', `${apiURL}/posts`, {
      title: 'Test',
      body: 'Test body',
      userId: 1
    })
      .then((response) => {
        cy.assertResponse(response, 201)
        cy.assertPostEquality(response, {'title': 'Test', 'body': 'Test body', 'userId': 1, 'id': 101})
      })
  })

  it('should update a post', () => {
    cy.request('PUT', `${apiURL}/posts/1`, {
      title: 'Test updated',
      body: 'Test body updated',
      userId: 1
    })
      .then((response) => {
        cy.assertResponse(response)
        cy.assertPostEquality(response, {'title': 'Test updated', 'body': 'Test body updated', 'userId': 1, 'id': 1})
      })
  })

  it('should delete post by id', () => {
    // Check that post with id 1 exists
    cy.fixture('apiData').then((apiData) => {
      cy.request('GET', `${apiURL}/posts/1`)
        .then((response) => {
          cy.assertResponse(response)
          cy.assertPostEquality(response, apiData[0])
        })

      cy.request('DELETE', `${apiURL}/posts/1`)
        .then((response) => {
          cy.assertResponse(response)
          cy.assertPostEquality(response, {})
        })
    })
  })
})
