import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Product = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeProducts {
        edges {
          node {
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_products_images {
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
      productBasicPage: nodePage(
        id: { eq: "92f28578-015b-5d98-b057-6bb066b3a04a" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const productBasicImage =
    data.productBasicPage.relationships.field_basic_page_image[0]?.localFile
      ?.childImageSharp.fluid

  return (
    <Layout>
      <Container>
        <h1>{data.productBasicPage.title}</h1>

        {productBasicImage ? <ContainerImg fluid={productBasicImage} /> : null}
      </Container>
      <Bio
        dangerouslySetInnerHTML={{ __html: data.productBasicPage.body.value }}
      ></Bio>
      <FlexContainer>
        {data.allNodeProducts.edges.map((edge) => {
          const links = <Link to={`/${edge.node.fields.slug}`}></Link>
          console.log(links, 'links hree')

          const productImages =
            edge.node.relationships.field_products_images[0]?.localFile
              ?.childImageSharp.fixed

          if (links.props.to === '/doors') {
            return (
              <li>
                {productImages ? (
                  <Link to="/doors">
                    <SetImg fixed={productImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }
          if (links.props.to === '/windows') {
            return (
              <li>
                {productImages ? (
                  <Link to="/wood">
                    <SetImg fixed={productImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }
          if (links.props.to === '/sliders') {
            return (
              <li>
                {productImages ? (
                  <Link to="/materials">
                    <SetImg fixed={productImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }

          if (links.props.to === '/curtain-wall') {
            return (
              <li>
                {productImages ? (
                  <Link to="/curtain-wall">
                    <SetImg fixed={productImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }

          if (links.props.to === '/accessories') {
            return (
              <li>
                {productImages ? (
                  <Link to="/accessories">
                    <SetImg fixed={productImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }

          return (
            <div>
              {productImages ? (
                <Link to="/curtain-wall">
                  <SetImg fixed={productImages} />
                  <h2>{edge.node.title}</h2>
                </Link>
              ) : null}
            </div>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

// styled components

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
const ContainerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: 980px;
  height: 21vw;
  clip-path: polygon(10vw 0, 100% 0, 100% 100%, 0% 100%);
`

const Bio = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: center;
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
  margin: 6px;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`

export default Product
