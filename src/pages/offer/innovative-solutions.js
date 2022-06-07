import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'

const InnovativeSolutions = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeInnovativeSolutionsSubitems {
        edges {
          node {
            id
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_innovative_sol_image {
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
      <FlexContainer>
        {data.allNodeInnovativeSolutionsSubitems.edges.map((edge) => {
          const images =
            edge.node.relationships.field_innovative_sol_image[0].localFile
              .childImageSharp.fixed
          return (
            <li>
              <Link to={`/innovative-solutions/${edge.node.fields.slug}`}>
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

export default InnovativeSolutions
