import React from 'react'
import Layout from '../components/Layout'

import { Link, graphql } from 'gatsby'
import Form from '../components/forms/Form'

export const query = graphql`
  query($slug: String!) {
    nodeCustom(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      relationships {
        field_custom_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Custom = ({ data }) => {
  return (
    <div>
      <Layout>
        <Form />
      </Layout>
    </div>
  )
}

export default Custom
