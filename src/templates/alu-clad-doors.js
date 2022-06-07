import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    nodeAluCladDoor(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_door_aluclad_img {
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

const AlucladDoorTemplate = ({ data }) => {
  const body = data.nodeAluCladDoor.body.value
  const image =
    data.nodeAluCladDoor.relationships.field_door_aluclad_img[0]?.localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h2>{data.nodeAluCladDoor.title}</h2>
      </Container>

      <BodyContainer dangerouslySetInnerHTML={{ __html: body }}></BodyContainer>
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
  // padding: 120px;
  margin: 0 auto;
`

export default AlucladDoorTemplate
