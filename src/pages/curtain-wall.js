import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CurtainWall = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeCurtainWallType(sort: { fields: created }) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_curtain_type_img {
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
      nodeProducts(id: { eq: "4b6c6bac-52b6-5b75-bf4d-33cfab334fb6" }) {
        title
        body {
          value
        }
        relationships {
          field_products_images {
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
    data.nodeProducts.relationships.field_products_images[0]?.localFile
      ?.childImageSharp.fluid

  const about = data.nodeProducts.body?.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodeProducts.title}</h1>

        {productBasicImage ? <ContainerImg fluid={productBasicImage} /> : null}
      </Container>
      {about ? (
        <div>
          <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio>
        </div>
      ) : null}

      <FlexContainer>
        {data.allNodeCurtainWallType.edges.map(edge => {
          const images =
            edge.node.relationships.field_curtain_type_img[0].localFile
              .childImageSharp.fixed
          return (
            <li>
              {/* perhaps change from fields.slug to path.alias */}
              <Link to={`/curtain-wall/${edge.node.fields.slug}`}>
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
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
const ContainerImg = styled(Img)`
  margin-left: auto;
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
  width: 330px;
  border-radius: 2%;
`

export default CurtainWall
