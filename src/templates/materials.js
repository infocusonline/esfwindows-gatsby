import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Form from '../components/forms/Form'
// import MaterialAluminum from '../pages/materials-aluminum'

export const query = graphql`
  query($slug: String!) {
    nodeMaterials(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_materials_images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 980, maxHeight: 460) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Materials = ({ data }) => {
  const materialItemImage =
    data.nodeMaterials.relationships.field_materials_images[0].localFile
      .childImageSharp.fluid

  return (
    <div>
      <Layout>
        <Img fluid={materialItemImage} />
        <About>
          <h1>{data.nodeMaterials.title}</h1>
        </About>

        <Form />
      </Layout>
    </div>
  )
}

// styled comonents

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
    padding-top: 1.4rem;

    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
  }
`

const FlexContainer = styled.ul`
  padding: 0.6rem;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px auto;

  h1 {
    font-size: 18px;
  }

  li {
    margin: 1rem;

    list-style-type: none;
    text-align: center;
    font-weight: 30;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`

export default Materials
