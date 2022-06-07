import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const Doors = () => {
  const data = useStaticQuery(graphql`
    query {
      # This is steel and specialty metals WINDOW node in drupal
      door: nodeSteelAndSpecialityMetals(
        id: { eq: "d7683551-bb95-5be9-857b-76ecffebdf33" }
      ) {
        id
        title
        body {
          value
        }
        relationships {
          field_steel_and_special_metal {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeSteelSpecialtyMetalsDoor {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            body {
              value
            }
            relationships {
              field_steel_specialty_metals_doo {
                localFile {
                  childImageSharp {
                    fixed(width: 300, height: 300) {
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

  const heroImage =
    data.door.relationships.field_steel_and_special_metal[0]?.localFile
      ?.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h1>{data.door.title}</h1>
        <ContainerImg fluid={heroImage} />
      </Container>
      <About>
        <Bio dangerouslySetInnerHTML={{ __html: data.door.body.value }}></Bio>
      </About>

      <FlexContainer>
        {data.allNodeSteelSpecialtyMetalsDoor.edges.map(edge => {
          const images =
            edge.node.relationships.field_steel_specialty_metals_doo[0]
              ?.localFile?.childImageSharp.fixed
          return (
            <li>
              <Link
                to={`/steel-and-specialty-metals/doors/${edge.node.fields.slug}`}
              >
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
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
    margin-top: 4rem;
    padding-top: 1.4rem;

    text-align: center;
  }

  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
  }
`

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
  /* border: 1px solid red; */
`

export default Doors
