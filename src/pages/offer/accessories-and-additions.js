import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby'

const AccessoriesAdditions = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: nodeOfferType(
        id: { eq: "d86e258a-9821-5f6c-a774-557027d27108" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAccessoriesAndAdditions {
        edges {
          node {
            title
            path {
              alias
            }
            relationships {
              field_accessories_doors_image {
                localFile {
                  childImageSharp {
                    fixed(width: 325, height: 295) {
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
  const heroPageImage =
    data.heroImage.relationships.field_offer_type_image[0].localFile
      .childImageSharp.fluid

  const pageBio = data.heroImage.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.heroImage.title}</h1>
        <ContainerImg fluid={heroPageImage} />
      </Container>
      <Bio dangerouslySetInnerHTML={{ __html: pageBio }}></Bio>

      <FlexContainer>
        {data.allNodeAccessoriesAndAdditions.edges.map((edge) => {
          const accessoriesAdditionImges =
            edge.node.relationships.field_accessories_doors_image[0].localFile
              .childImageSharp.fixed
          return (
            <li key={edge.node.title}>
              {/* no slash need after offer bcause it is already added on drupal alias */}
              <Link to={`/offer${edge.node.path.alias}`}>
                <SetImg fixed={accessoriesAdditionImges} />
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
const ContainerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: 980px;
  height: 22vw;
  clip-path: polygon(10vw 0, 100% 0, 100% 100%, 0% 100%);
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

export default AccessoriesAdditions
