import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

import Layout from '../components/Layout'

const Custom = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeCustom {
        edges {
          node {
            id
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_custom_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 420, maxHeight: 240) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      customBasicPage: nodePage(
        id: { eq: "623fad50-6b1f-588c-876c-cbb568b8d60d" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1225, maxHeight: 819) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const basicPageImage =
    data.customBasicPage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const title = data.customBasicPage.title
  const body = data.customBasicPage.body.value

  return (
    <>
      <Layout>
        <Carousel
          autoPlay
          showStatus={true}
          showThumbs={true}
          showArrows={true}
          infiniteLoop={true}
          dynamicHeight={true}
          stoponHover={true}
        >
          {data.customBasicPage.relationships.field_basic_page_image.map(
            (image) => {
              const customImages = image.localFile?.childImageSharp?.fluid

              return (
                <div>
                  <Img fluid={customImages} />
                </div>
              )
            }
          )}
        </Carousel>
        <About>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </About>
      </Layout>
    </>
  )
}

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

    a {
      text-decoration: none;
      color: #3d3d3d;
    }
  }
`

export default Custom
