import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const FamaHandlesWindows = () => {
  // to add or edit any of these items go to the block section on Drupal.
  // it is a custom block that i created
  const data = useStaticQuery(graphql`
    query {
      allBlockContentFamaDoorsAndHandles {
        edges {
          node {
            field_title
            body {
              value
            }
            relationships {
              field_fama_doors_and_handles_ima {
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
        Fama Doors and handles
      </h3>

      <FlexContainer>
        {data.allBlockContentFamaDoorsAndHandles.edges.map(edge => {
          const title = edge.node.field_title
          const famaHandleImages =
            edge.node.relationships.field_fama_doors_and_handles_ima[0]
              .localFile.childImageSharp.fluid
          return (
            <li>
              <h2>{title}</h2>
              <SetImg fluid={famaHandleImages} />
            </li>
          )
        })}
      </FlexContainer>
    </div>
  )
}

// Styled components

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-between;
  padding: 0.4rem;

  h2 {
    font-size: 1.3em;
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
// 802px

const SetImg = styled(Img)`
  /* border: 1px solid red; */
  display: block !important;
  padding: 10px;
  margin: 12px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default FamaHandlesWindows
