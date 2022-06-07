import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProductDoorPage = () => {
  const data = useStaticQuery(graphql`
    query {
      DoorProductImage: nodeProducts(
        id: { eq: "311a37bf-a733-586b-a3ac-160b9e7842a6" }
      ) {
        id
        title
        body {
          value
        }
        relationships {
          field_products_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 680) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAluCladWoodDoor {
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
              field_aluclad_wood_door {
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
    data.DoorProductImage.relationships.field_products_images[0].localFile
      .childImageSharp.fluid
  const about = data.DoorProductImage.body.value

  return (
    <Layout>
      <Container>
        <ContainerImg fluid={headerImage} />
      </Container>
      {about ? <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio> : null}

      <FlexContainer>
        {data.allNodeAluCladWoodDoor.edges.map((edge) => {
          const links = <Link to={`/${edge.node.fields.slug}`}></Link>
          const images =
            edge.node.relationships.field_aluclad_wood_door[0].localFile
              .childImageSharp.fixed

          if (links.props.to === '/pvc') {
            return (
              <li>
                {/* this page is already made. if it needs to be reorganize change the link path accordingly */}
                {images ? (
                  <Link to="/offer/pvc-offer/sliding-windows">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }
          if (links.props.to === '/alu') {
            return (
              <li>
                {/* this page is already made. if it needs to be reorganize change the link path accordingly */}
                {images ? (
                  <Link to="/offer/alu-offer/sliding-windows">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }
          if (links.props.to === '/alu-clad-wood') {
            return (
              <li>
                {/* this page is already made. if it needs to be reorganize change the link path accordingly */}
                {images ? (
                  <Link to="/products/alu-clad-doors">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }

          if (links.props.to === '/steel') {
            return (
              <li>
                {/* this page is already made. if it needs to be reorganize change the link path accordingly */}
                {images ? (
                  <Link to="/steel-and-specialty-metals/doors">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                ) : null}
              </li>
            )
          }
          return (
            <li key={edge.node.title}>
              <Link to={`/offer/${edge.node.fields.slug}`}>
                {images ? (
                  <div>
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </div>
                ) : (
                  <div>
                    <p>Image not available</p>
                  </div>
                )}
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
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

export default ProductDoorPage
