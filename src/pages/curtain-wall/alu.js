import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CurtainWallAlu = () => {
  const data = useStaticQuery(graphql`
    query {
      # this is the about node from drupal content type
      nodeCurtainWallType(id: { eq: "899dcd7d-33b6-5dda-8fe8-433e7eba9ff4" }) {
        title
        body {
          value
        }
      }
      allNodeCurtainWallTypeAlu {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_curtain_alu_img {
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
        }
      }
    }
  `)
  console.log(data.nodeCurtainWallType)
  const about = data.nodeCurtainWallType.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodeCurtainWallType.title}</h1>
      </Container>

      <About dangerouslySetInnerHTML={{ __html: about }}></About>
      <FlexContainer>
        {data.allNodeCurtainWallTypeAlu.edges.map(edge => {
          const images =
            edge.node.relationships.field_curtain_alu_img[0]?.localFile
              ?.childImageSharp.fixed
          return (
            <li>
              <Link to={`/curtain-wall-alu/${edge.node.fields.slug}`}>
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

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
    padding-top: 1.4rem;

    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
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

export default CurtainWallAlu
