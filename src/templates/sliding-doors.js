import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    nodeAluOfferSlidingDoors(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      field_alu_offer_liftslide_door_a {
        value
      }
      fields {
        slug
      }
      relationships {
        field_alu_offer_liftslide_door_i {
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

const SlidingDoors = ({ data }) => {
  const body = data.nodeAluOfferSlidingDoors.body.value
  const pageImage =
    data.nodeAluOfferSlidingDoors.relationships
      .field_alu_offer_liftslide_door_i[0].localFile.childImageSharp.fluid

  //   const secondPageImage =
  //     data.nodeAluOfferSlidingDoors.relationships
  //       .field_alu_offer_liftslide_door_i[1].localFile.childImageSharp.fluid

  const secondParagraph =
    data.nodeAluOfferSlidingDoors.field_alu_offer_liftslide_door_a[0].value

  return (
    <Layout>
      <Container>
        <h2>{data.nodeAluOfferSlidingDoors.title}</h2>

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: body }}
        ></BodyContainer>

        <Img fluid={pageImage} />

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: secondParagraph }}
        ></BodyContainer>
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
  }
`

const BodyContainer = styled.div`
  max-width: 1030px;
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

export default SlidingDoors
