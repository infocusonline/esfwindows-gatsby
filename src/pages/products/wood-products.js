import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const WoodProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutPage: nodePage(id: { eq: "a4bc2365-11b2-5dd1-834c-93e66ba7f4df" }) {
        id
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fixed(width: 900, height: 520) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      allNodeOfferType2(sort: { fields: created }) {
        edges {
          node {
            title
            fields {
              slug
            }
            path {
              alias
            }
            relationships {
              field_offer_type_2_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      accessoriesDoorsLink: nodeOfferType(
        id: { eq: "d86e258a-9821-5f6c-a774-557027d27108" }
      ) {
        id
        title
        relationships {
          field_offer_type_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  // console.log(data.aboutPage, 'our data')
  const title = data.aboutPage.title
  const bio = data.aboutPage.body.value
  return (
    <Layout>
      <About>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: bio }}></div>
      </About>

      <FlexContainer>
        {data.allNodeOfferType2.edges.map(edge => {
          const images =
            edge.node.relationships.field_offer_type_2_image[0]?.localFile
              ?.childImageSharp.fluid

          const links = <Link to={`/${edge.node.fields.slug}`}></Link>

          if (links.props.to === '/alu-clad-wood') {
            return (
              <li>
                <Link to="/products/alu-options/">
                  <SetImg fluid={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          } else {
            return (
              <li key={edge.node.id}>
                <Link to={`/products/${edge.node.fields.slug}`}>
                  {images ? (
                    <div>
                      <SetImg fluid={images} />
                    </div>
                  ) : (
                    <p>no image</p>
                  )}
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          }
        })}
      </FlexContainer>
    </Layout>
  )
}

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
    padding-top: 4.4rem;

    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
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
  margin: 6px;

  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default WoodProducts
