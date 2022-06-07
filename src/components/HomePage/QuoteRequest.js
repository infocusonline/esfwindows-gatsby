import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Quote = () => {
  return (
    <QuoteContainer>
      <StyledLink to="/contact-us">Contact Us</StyledLink>
    </QuoteContainer>
  )
}
const QuoteContainer = styled.div`
  background-color: #f5f5f5;
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem 0;
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
    background-color: #ffffff;
  }
`

export default Quote
