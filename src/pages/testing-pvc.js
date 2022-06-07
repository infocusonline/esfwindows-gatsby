import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const TestinPVC = () => {
  const data = useStaticQuery(graphql`
    query {
      HeaderImage: nodeProductsWindows(
        id: { eq: "e1258f65-cc7d-5071-9b06-472d5a0e5cd9" }
      ) {
        id
        title
        body {
          value
        }
        relationships {
          field_product_windows_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      allNodePvcOfferSchucoWindows {
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
              field_schuco_windows_image {
                localFile {
                  childImageSharp {
                    fixed(width: 325, height: 325) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const headerImage =
    data.HeaderImage.relationships.field_product_windows_image.localFile
      .childImageSharp.fluid

  const about = data.HeaderImage.body.value
  return (
    <div>
      <Layout>
        <Container>
          <ContainerImg fluid={headerImage} />
        </Container>
        {about ? <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio> : null}

        <FlexContainer>
          {data.allNodePvcOfferSchucoWindows.edges.map((edge) => {
            const images =
              edge.node.relationships.field_schuco_windows_image[0].localFile
                .childImageSharp.fixed
            return (
              <li>
                <Link to={`/pvc-offer/${edge.node.fields.slug}`}>
                  <SetImg fixed={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 90px;
  /* height: 500px; */
  margin-bottom: 80px;
  h1 {
    margin-top: 90px;
    padding-left: 30px;
    margin-left: 20px;
    font-size: 50px;
  }
`

const Bio = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: center;
`

const ContainerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: 980px;
  height: 22vw;
  clip-path: polygon(10vw 0, 100% 0, 100% 100%, 0% 100%);
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    list-style-type: none;
    margin: 20px;
  }
  h2 {
    color: #2d385b;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 190px;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default TestinPVC
