import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../../../components/Layout'

const SlidingWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSubItems(id: { eq: "f5d622a2-a5c1-5d90-b2d9-cebe1a52f9b6" }) {
        title
        body {
          value
        }
        relationships {
          field_pvc_offer_subitems_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodePvcOfferSlidingWindows {
        edges {
          node {
            id
            title
            path {
              alias
            }
            fields {
              slug
            }
            relationships {
              field_pvc_offer_liftslide_doors {
                localFile {
                  childImageSharp {
                    fixed(width: 325, height: 325) {
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

  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image[1]
      .localFile.childImageSharp.fluid

  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSubItems.title}</h1>
        <Img fluid={pageImage} />
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: pageBody }}></Bio>

      <FlexContainer>
        {data.allNodePvcOfferSlidingWindows.edges.map((edge) => {
          const images =
            edge.node.relationships.field_pvc_offer_liftslide_doors[0].localFile
              .childImageSharp.fixed
          return (
            <div>
              <li>
                <Link to={`/pvc-sliding-doors/${edge.node.fields.slug}`}>
                  <SetImg fixed={images} />
                  <h2>{edge.node.title} </h2>
                </Link>
              </li>
            </div>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

const Container = styled.div`
  margin-top: 120px;
  padding: 50px;
  h1 {
    text-align: center;
    padding-bottom: 50px;
    margin: 0 auto;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    color: #2d385b;
  }
`

const Bio = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: center;
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
  flex-grow: 1;
  padding: 149px;
`

export default SlidingWindows
