import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const PvcOffer = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeOfferType(id: { eq: "085f47b6-a58f-5fb4-89b9-19dbdbd71e01" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
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
      allNodePvcOfferSubItems {
        edges {
          node {
            title
            path {
              alias
            }
            relationships {
              field_pvc_offer_subitems_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 280) {
                      ...GatsbyImageSharpFluid
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
  const about = data.nodeOfferType.body.value
  const heroImage =
    data.nodeOfferType.relationships.field_offer_type_image[0]?.localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h1>{data.nodeOfferType.title}</h1>
        {heroImage ? <ContainerImg fluid={heroImage} /> : null}
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio>
      <FlexContainer>
        {data.allNodePvcOfferSubItems.edges.map((edge) => {
          const images =
            edge.node.relationships.field_pvc_offer_subitems_image[0].localFile
              ?.childImageSharp?.fluid
          return (
            <li>
              {images ? (
                <Link to={`${edge.node.path.alias}`}>
                  <SetImg fluid={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              ) : (
                <Link to={`${edge.node.path.alias}`}>
                  <h2>{edge.node.title}</h2>
                </Link>
              )}
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
  /* flex-direction: row-reverse; */
  justify-content: center;
  padding: 0.6rem;
  margin: 90px;

  li {
    list-style-type: none;
    padding: 10px;
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
  width: 310px;
  border-radius: 2%;
`

export default PvcOffer
