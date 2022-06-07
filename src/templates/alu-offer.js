import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    nodeAluOfferWindows(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      field_alu_offer_windows_text {
        value
      }
      fields {
        slug
      }

      relationships {
        field_alu_offer_windows_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const AluOfferTemplate = ({ data }) => {
  const body = data.nodeAluOfferWindows.body.value
  const secondBody =
    data.nodeAluOfferWindows.field_alu_offer_windows_text[1].value
  const productIcons =
    data.nodeAluOfferWindows.field_alu_offer_windows_text[0].value
  const pageImage =
    data.nodeAluOfferWindows.relationships.field_alu_offer_windows_image[1]
      .localFile.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h2>{data.nodeAluOfferWindows.title}</h2>

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: body }}
        ></BodyContainer>
        <Img fluid={pageImage} />

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: secondBody }}
        ></BodyContainer>

        <FlexContainer>
          <div dangerouslySetInnerHTML={{ __html: productIcons }}></div>
        </FlexContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    padding-top: 60px;
    padding-left: 40px;
    margin-top: 90px;

    font-size: 60px;
  }
`

const BodyContainer = styled.div`
  max-width: 1030px;
  /* border: 1px solid red; */
  // padding: 120px;
  margin: 0 auto;
`

const FlexContainer = styled.div`
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .flex li {
    list-style-type: none;
    margin: 0 auto;
  }

  p {
    text-align: center;
    width: 120px;
    padding: 10px;
    margin: 0 auto;
  }
`
export default AluOfferTemplate
