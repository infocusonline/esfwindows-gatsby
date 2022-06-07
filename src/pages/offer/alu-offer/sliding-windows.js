import React from 'react'
import Layout from '../../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const SlidingWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeAluOfferSubItems(id: { eq: "a255313f-9887-51fe-9d43-acba7fd365d2" }) {
        title
        relationships {
          field_alu_offer_sub_items_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAluOfferSlidingDoors(sort: { fields: title }) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_alu_offer_liftslide_door_i {
                localFile {
                  childImageSharp {
                    fixed(height: 300, width: 360) {
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
  return (
    <Layout>
      <Container>
        <h1>{data.nodeAluOfferSubItems.title}</h1>
      </Container>

      <FlexContainer>
        {data.allNodeAluOfferSlidingDoors.edges.map(edge => {
          const images =
            edge.node.relationships.field_alu_offer_liftslide_door_i[0]
              .localFile.childImageSharp.fixed
          return (
            <li key={edge.node.title}>
              <Link to={`/sliding-doors/${edge.node.fields.slug}`}>
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
  width: 100%;
  height: auto;
`
export default SlidingWindows
