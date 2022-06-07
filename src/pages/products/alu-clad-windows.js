import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const AlucladWood = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeAlucladWoodSubItems {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_aluronwood_subitems {
                localFile {
                  childImageSharp {
                    fixed(height: 360, width: 360) {
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
    <div>
      <Layout>
        <FlexContainer>
          {data.allNodeAlucladWoodSubItems.edges.map(edge => {
            const images =
              edge.node.relationships.field_aluronwood_subitems[0]?.localFile
                ?.childImageSharp.fixed
            return (
              <li>
                <Link to={`/alu-clad-wood/${edge.node.fields.slug}`}>
                  <SetImg fixed={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}

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
    width: 220px;
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
export default AlucladWood
