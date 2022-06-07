import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import Img from 'gatsby-image'

const DoorContent = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "74aebf1e-5b6f-56e7-8bec-54951961cca4" }) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 900, maxHeight: 520) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      # this is here just to link you to the door page
      doorLink: nodeProducts(
        id: { eq: "311a37bf-a733-586b-a3ac-160b9e7842a6" }
      ) {
        id
        title
        fields {
          slug
        }
      }
    }
  `)
  const { title } = data.nodePage
  const body = data.nodePage.body.value

  const image =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      ?.childImageSharp?.fluid

  return (
    <ContainerPadding>
      <Container>
        <Top>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
          <ButtonCenteredFlex>
            <StyledLink to={`products/wood-products`} key={data.doorLink.id}>
              Learn More
            </StyledLink>
          </ButtonCenteredFlex>
        </Top>
        {image ? <SetImg fluid={image} alt={title} /> : null}
      </Container>
    </ContainerPadding>
  )
}

// styled components
const ContainerPadding = styled.div`
  padding-top: 90px;
`

const SetImg = styled(Img)`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
    width: 90%;
  }
`

const Container = styled.div`
  background: #f5f5f5;
  display: flex;

  @media (max-width: 899px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const Top = styled.div`
  margin: 4rem 20px 0 20px;
  width: 35%;
  /* width: auto; */

  @media (max-width: 899px) {
    width: auto;
  }

  h1 {
    /* border: 1px solid red; */
    text-align: center;
    margin-top: 30px;
  }

  p {
    text-align: center;
    padding-top: 25px;
  }
`

const ButtonCenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
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
    background-color: #274f8d;
    color: white;
  }

  @media (max-width: 899px) {
    margin-bottom: 40px;
  }

  @media (max-width: 1300px) {
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: #274f8d;
    color: white;
  }
`
export default DoorContent
