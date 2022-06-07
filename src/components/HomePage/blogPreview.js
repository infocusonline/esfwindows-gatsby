import React from 'react'
import Img from 'gatsby-image'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

// importing a component for customer portal
// check in components in case this needs to be modified or added elsewhere
// import CustomerPortal from '../HomePage/customer-portal'

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePage(id: { eq: "a343090d-aa5f-59a7-b1ec-7f31ad3a4093" }) {
        id
        title
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      customerPortalLink: nodePage(
        id: { eq: "df80ea2c-26d8-5e8e-b2c9-55c5d75dadd7" }
      ) {
        id
        title
        field_basic_page_link {
          uri
          title
        }
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const blogImage =
    data.nodePage.relationships.field_basic_page_image[0]?.localFile
      ?.childImageSharp.fluid

  const customerPortalImage =
    data.customerPortalLink.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid

  const customerPortalLink =
    data.customerPortalLink.field_basic_page_link[0].uri
  // console.log(customerPortalLink, '9997876645353')

  const linkTitle = data.customerPortalLink.field_basic_page_link[0].title

  return (
    <Container>
      <BlogContainer>
        {blogImage ? (
          <div>
            <Img
              fluid={blogImage}
              title={data.nodePage.title}
              alt={data.nodePage.title}
            />
            <ButtonCenteredFlex>
              <StyledLink to={`/portfolio`}>{data.nodePage.title}</StyledLink>
            </ButtonCenteredFlex>
          </div>
        ) : null}
      </BlogContainer>
      <Gutter></Gutter>
      <CustomerPortalContainer>
        <RightSide>
          <Img fluid={customerPortalImage} />
          <ButtonCenteredFlex>
            <StyledLinkExternal
              href="https://quickclick.com/r/tacfr"
              target="_blank"
              rel="noreferrer"
            >
              {linkTitle}
            </StyledLinkExternal>
          </ButtonCenteredFlex>
        </RightSide>
      </CustomerPortalContainer>
    </Container>
  )
}

// styled components

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  margin-top: 6rem;
  max-width: 1679px;
`

const Gutter = styled.div`
  width: 10px;
`

const BlogContainer = styled.div`
  width: 50%;
`

const CustomerPortalContainer = styled.div`
  width: 50%;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: grey;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    border-bottom: 2px solid #2d385b;
    position: relative;
    top: 80px;
    font-size: 18px;
    padding: 5px;
    border-radius: 0px;
  }
`

const StyledLinkExternal = styled.a`
  text-decoration: none;
  color: #2d385b;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: transparent;
    color: grey;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    border-bottom: 2px solid #2d385b;
    position: relative;
    top: 80px;
    font-size: 18px;
    padding: 5px;
    border-radius: 0px;
  }
`

const ButtonCenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -80px;
`

const RightSide = styled.div`
  /* border: 1px solid red; */
  width: 100%;
`

export default BlogPreview
