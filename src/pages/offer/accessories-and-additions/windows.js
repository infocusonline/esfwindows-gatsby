import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../../../components/Layout'

const AccessoriesWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeAccessoriesAndAdditionsWindow {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_accessories_window_image {
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
    <div>
      <Layout>
        <FlexContainer>
          {data.allNodeAccessoriesAndAdditionsWindow.edges.map(edge => {
            const images =
              edge.node.relationships.field_accessories_window_image[0]
                .localFile.childImageSharp.fixed
            return (
              <li>
                <Link
                  to={`/accessories-and-additions-windows/${edge.node.fields.slug}`}
                >
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

export default AccessoriesWindows
