import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../../components/Layout'

const AluWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      #this is a query for the hero image
      nodeAluOfferSubItems(id: { eq: "af3604bf-bc86-5ddc-8da8-cbccaa780455" }) {
        title
        body {
          value
        }
        relationships {
          field_alu_offer_sub_items_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 760) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAluOfferWindows(sort: { fields: title }) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_alu_offer_windows_image {
                localFile {
                  childImageSharp {
                    fixed(height: 325, width: 325) {
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

  console.log(data.allNodeAluOfferWindows, 'grab image here')
  const pageImage =
    data.nodeAluOfferSubItems.relationships.field_alu_offer_sub_items_image
      .localFile.childImageSharp.fluid

  const pageBio = data.nodeAluOfferSubItems.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodeAluOfferSubItems.title}</h1>
        <ContainerImg fluid={pageImage} />
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: pageBio }}></Bio>

      <FlexContainer>
        {data.allNodeAluOfferWindows.edges.map(edge => {
          const images =
            edge.node.relationships.field_alu_offer_windows_image[0].localFile
              .childImageSharp.fixed
          return (
            <li key={edge.node.title}>
              <Link to={`/alu-offer/${edge.node.fields.slug}`}>
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
  flex-grow: 1;
  padding: 149px;
  /* border: 1px solid red; */
`

export default AluWindows
