import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const Shutters = () => {
  const data = useStaticQuery(graphql`
    query {
      # shutters indivudual heroe image from a different node type
      nodeOfferType(id: { eq: "86b50ced-9dee-5063-ab3b-fc29193644dc" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
            localFile {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allNodeShutters {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_shutter_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 550, maxHeight: 550) {
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
  return (
    <Layout>
      <Container>
        <h1>{data.nodeOfferType.title}</h1>
      </Container>
      <About dangerouslySetInnerHTML={{ __html: about }}></About>

      <FlexContainer>
        {data.allNodeShutters.edges.map(edge => {
          const images =
            edge.node.relationships.field_shutter_image[0].localFile
              .childImageSharp.fluid
          return (
            <li>
              <Link to={`/shutters/${edge.node.fields.slug}`}>
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
  h1 {
    margin-top: 110px;
    text-align: center;
  }
`

const About = styled.div`
  display: block;
  padding: 50px;
  margin: 0 auto;
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

export default Shutters
