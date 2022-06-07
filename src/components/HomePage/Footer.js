import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        <p>Esfwindows</p>
        <h3>
          Follow us on
          <a
            href="https://www.linkedin.com/company/eurostar-fenestration-llc"
            target="_blank"
            rel="noreferrer"
          ></a>
        </h3>
      </div>
    </Container>
  )
}

// x

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  /* margin-top: 1rem; */
  padding-bottom: 10px;
  text-align: center;

  p,
  h3 {
    font-family: 'Lora';
    color: white;
    padding: 1rem;
  }
`

export default Footer
