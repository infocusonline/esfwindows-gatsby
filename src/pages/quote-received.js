import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link } from 'gatsby'

const QuoteReceived = ({ location }) => {
  return (
    <Layout>
      <ThankYou>
        <h1>REQUEST RECEIVED SUCCESSFULLY</h1>
        <h3>
          {/* Thank you {location.state.firstName} for contacting us! We will get in */}
          Thank you for contacting us! We will get in touch with you shortly.
        </h3>
      </ThankYou>
      <QuoteReceivedd>
        <StyledLink to="/">Back to Home</StyledLink>
      </QuoteReceivedd>
    </Layout>
  )
}

const ThankYou = styled.div`
  text-align: center;
  padding: 11.9rem 1rem 0;
`
const QuoteReceivedd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  text-transform: uppercase;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ffff;

  &:hover {
    background-color: #f5f5f5;
  }
`

export default QuoteReceived
