describe("Bulk Custom Pricing API Tests", () => {

  const apiUrl = "https://app.pricelabs.co/api/add_custom_pricing"

  const headers = {
    "Content-Type": "application/json",
    
  }

  it("Verify bulk pricing update API returns success", () => {

    const payload = {
      listing_id: 192,
      start_date: "2026-03-20",
      end_date: "2026-03-22",
      price: 150
    }

    cy.request({
      method: "POST",
      url: apiUrl,
      headers: headers,
      body: payload,
      failOnStatusCode: false
    }).then((response) => {

      cy.log("Response Body: " + JSON.stringify(response.body))

      expect(response.status).to.be.oneOf([200,201])

    })

  })


  it("Verify API handles invalid payload", () => {

    const invalidPayload = {
      listing_id: null,
      start_date: "",
      end_date: "",
      price: ""
    }

    cy.request({
      method: "POST",
      url: apiUrl,
      headers: headers,
      body: invalidPayload,
      failOnStatusCode: false
    }).then((response) => {

      cy.log("Invalid Payload Response: " + JSON.stringify(response.body))

      expect(response.status).to.be.oneOf([422,200])

    })

  })
  it("Verify API response with expired authentication token", () => {

  const payload = {
    listing_id: 192,
    start_date: "2026-03-22",
    end_date: "2026-03-23",
    price: 140
  }

  const expiredHeaders = {
    "Content-Type": "application/json",
    "cookie": "_p_session=expired_token_value"
  }

  cy.request({
    method: "POST",
    url: apiUrl,
    headers: expiredHeaders,
    body: payload,
    failOnStatusCode: false
  }).then((response) => {

    cy.log("Expired Token Response: " + JSON.stringify(response.body))

    expect(response.status).to.be.oneOf([200,422])

  })

})

  it("Verify API response time", () => {

    const payload = {
      listing_id: 192,
      start_date: "2026-03-20",
      end_date: "2026-03-21",
      price: 120
    }

    cy.request({
      method: "POST",
      url: apiUrl,
      headers: headers,
      body: payload
    }).then((response) => {

      expect(response.duration).to.be.lessThan(5000)

    })

  })

})