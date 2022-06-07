import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const ManitalDesignComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allBlockContentManitalDesign {
        edges {
          node {
            field_design_
            relationships {
              field_design_style_image {
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
    <FlexContainer>
      {data.allBlockContentManitalDesign.edges.map(edge => {
        const manitalDesignImages =
          edge.node.relationships.field_design_style_image.localFile
            .childImageSharp.fluid

        return (
          <li>
            <h2>{edge.node.field_design_}</h2>
            <SetImg fluid={manitalDesignImages} />
          </li>
        )
      })}
    </FlexContainer>
  )
}

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

export default ManitalDesignComponent
