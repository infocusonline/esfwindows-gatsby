import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import Img from 'gatsby-image'
import Head from '../components/HomePage/Head'
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    nodeCurtainWallTypeAlu(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_curtain_alu_img {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const CurtainWallAluTemplate = ({ data }) => {
  const body = data.nodeCurtainWallTypeAlu.body.value
  return (
    <Layout>
      <Container>
        <h2>{data.nodeCurtainWallTypeAlu.title}</h2>
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

  padding-top: 150px;
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

export default CurtainWallAluTemplate
