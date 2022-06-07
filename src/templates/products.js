import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import Form from '../components/forms/Form'

export const query = graphql`
  query($slug: String!) {
    nodeProducts(fields: { slug: { eq: $slug } }) {
      title
      relationships {
        field_products_images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1008, maxHeight: 108) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Product = ({ data }) => {
  const image =
    data.nodeProducts.relationships.field_products_images[0]?.localFile
      ?.childImageSharp.fluid
  return (
    <Layout>
      {image ? (
        <div>
          <Img fluid={image} />
          <h1>products</h1>
          <Form />
        </div>
      ) : null}
    </Layout>
  )
}

export default Product
