import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const FamaDoorWindowHandles = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeFamaDoorsDelete {
        edges {
          node {
            fields {
              slug
            }
            title
            relationships {
              field_fama_doors_image {
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
        {data.allNodeFamaDoorsDelete.edges.map(edge => {
          const famaDoorsImages =
            edge.node.relationships.field_fama_doors_image[0].localFile
              .childImageSharp.fluid
          return (
            <div>
              <h2>{edge.node.title}</h2>
              <Link to={edge.node.fields.slug}>
                <SetImg fluid={famaDoorsImages} />
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
export default FamaDoorWindowHandles
