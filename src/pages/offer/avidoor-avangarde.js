import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

const AvidoorAvanrade = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeEntranceDoors(id: { eq: "7618eb1b-0e70-5fee-945a-06da257d1635" }) {
        title
        body {
          value
        }
      }
      # mapping over these avidoor sub items to display below
      allNodeAvidoorAvangardeItems {
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
              field_avangarde_image {
                localFile {
                  childImageSharp {
                    fixed(height: 300, width: 390) {
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

  const body = data.nodeEntranceDoors.body.value
  return (
    <div>
      <Layout>
        <Title>
          <h2>{data.nodeEntranceDoors.title}</h2>
        </Title>
        <Container>
          <BodyContainer
            dangerouslySetInnerHTML={{ __html: body }}
          ></BodyContainer>

          <FlexContainer>
            {data.allNodeAvidoorAvangardeItems.edges.map(edge => {
              const images =
                edge.node.relationships.field_avangarde_image[0].localFile
                  .childImageSharp.fixed
              return (
                <li>
                  <Link to={`/avidoor-avangarde/${edge.node.fields.slug}`}>
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            })}
          </FlexContainer>
        </Container>
      </Layout>
    </div>
  )
}

const Title = styled.div`
  h2 {
    margin-top: 140px;
    text-align: center;
  }
`
const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    margin-top: 90px;
  }
`
const BodyContainer = styled.div`
  .pojemnik h4 {
    text-decoration: underline;
    color: #2d385b;
    text-align: center;
    font-size: 26px;
  }
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: center;

  li {
    list-style-type: none;
    padding: 10px;
  }

  h2 {
    color: #2d385b;
    font-size: 20px;
    margin-top: 10px;
    text-align: left;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 170px;
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

export default AvidoorAvanrade
