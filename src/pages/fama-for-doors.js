import React from 'react'
import Layout from '../components/Layout'
import FamaHandles from '../components/blocks/famaHandles'
import styled from 'styled-components'

const FamaDoorWindowHandles = () => {
  return (
    <Layout>
      <FlexContainer>
        <FamaHandles />
      </FlexContainer>
    </Layout>
  )
}

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-around;

  padding: 0.4rem;
  margin-top: 110px;

  h2 {
    text-align: center;
    color: #2d385b;
  }

  li {
    margin: 0.3rem;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

export default FamaDoorWindowHandles
