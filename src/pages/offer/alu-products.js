import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const AluOffer = () => {
  const data = useStaticQuery(graphql`
    query {
      #body of the page
      nodeOfferType(id: { eq: "5ed4cba3-ddf2-5841-a643-a55f63510da1" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAluOfferSubItems {
        edges {
          node {
            id
            title
            path {
              alias
            }

            relationships {
              field_alu_offer_sub_items_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 550) {
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

  const heroPageImage =
    data.nodeOfferType.relationships.field_offer_type_image?.[0]?.localFile
      .childImageSharp.fluid

  const aluOfferBio = data.nodeOfferType.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodeOfferType.title}</h1>
        <ContainerImg fluid={heroPageImage} />
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: aluOfferBio }}></Bio>

      <FlexContainer>
        {data.allNodeAluOfferSubItems.edges.map((edge) => {
          const images =
            edge.node.relationships.field_alu_offer_sub_items_image.localFile
              .childImageSharp.fluid

          return (
            <li key={edge.node.id}>
              <Link to={`${edge.node.path.alias}`}>
                <SetImg fluid={images} />
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
  margin: 6px;
  width: 330px;
  border-radius: 2%;
`

export default AluOffer
