import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    nodeShutters(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_shutter_image {
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

const Shutters = ({ data }) => {
  const body = data.nodeShutters.body.value
  const pageImage =
    data.nodeShutters.relationships.field_shutter_image[0].localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h2>{data.nodeShutters.title}</h2>

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: body }}
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
    padding: 10px;
    margin: 0 auto;
  }
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

export default Shutters
