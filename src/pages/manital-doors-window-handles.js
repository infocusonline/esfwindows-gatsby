import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery, Link } from 'gatsby'

const ManitalDoorsWindowHandles = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeManitalDoorAndWindowStyles {
        edges {
          node {
            title
            path {
              alias
            }

            fields {
              slug
            }
            relationships {
              field_manital_type_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 420, maxHeight: 420) {
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
  return (
    <Layout>
      <FlexContainer>
        {data.allNodeManitalDoorAndWindowStyles.edges.map(edge => {
          const manitalDoorWindowImage =
            edge.node.relationships.field_manital_type_image.localFile
              .childImageSharp.fluid

          return (
            <div>
              <h2>{edge.node.title}</h2>
              <Link to={`${edge.node.path.alias}`}>
                <SetImg fluid={manitalDoorWindowImage} />
              </Link>
            </div>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-around;

  padding: 0.4rem;
  margin-top: 110px;

  h2 {
    text-align: center;
    color: #2d385b;
  }

  li {
    margin: 0.3rem;
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

const SetImg = styled(Img)`
  /* border: 1px solid red; */
  display: block !important;
  padding: 10px;
  margin: 12px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default ManitalDoorsWindowHandles
