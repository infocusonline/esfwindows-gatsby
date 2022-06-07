import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const Wood = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeOfferType2(id: { eq: "a7a08a51-36f2-5757-9623-9cc022c397e8" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_2_image {
            localFile {
              childImageSharp {
                fixed(width: 2000, height: 680) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allNodeWoodWindows {
        edges {
          node {
            title
            fields {
              slug
            }
            body {
              value
            }
            relationships {
              field_wood_windows_img {
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
  console.log(data, 'kj')
  const heroImage =
    data.nodeOfferType2.relationships.field_offer_type_2_image[0]?.localFile
      ?.childImageSharp?.fixed
  const about = data.nodeOfferType2.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodeOfferType2.title}</h1>
        <ContainerImg fixed={heroImage} />
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio>
      <FlexContainer>
        {data.allNodeWoodWindows.edges.map(edge => {
          const images =
            edge.node.relationships.field_wood_windows_img?.[0].localFile
              .childImageSharp.fluid
          return (
            <li>
              <Link to={`/wood-options/${edge.node.fields.slug}`}>
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

const ContainerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: 980px;
  height: 22vw;
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
  width: 330px;
  border-radius: 2%;
`

export default Wood
