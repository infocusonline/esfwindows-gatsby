import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const FamaAccessoriesBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeFamaAccessories {
        edges {
          node {
            title
            relationships {
              field_fama_accessories_image {
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
    <div>
      <h3 style={{ paddingTop: '150px', textAlign: 'center' }}>
        Fama Accessories
      </h3>
      <FlexContainer>
        {data.allNodeFamaAccessories.edges.map(edge => {
          const famaAccessoriesImage =
            edge.node.relationships.field_fama_accessories_image[0].localFile
              ?.childImageSharp?.fluid
          return (
            <div>
              <li>{edge.node.title}</li>
              {famaAccessoriesImage ? (
                <div>
                  <SetImg fluid={famaAccessoriesImage} />
                </div>
              ) : (
                <p>image not available</p>
              )}
            </div>
          )
        })}
      </FlexContainer>
    </div>
  )
}

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-between;
  padding: 0.4rem;

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

export default FamaAccessoriesBlock
