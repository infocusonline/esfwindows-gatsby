import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const SteelSpecialtyMetals = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeMaterials(id: { eq: "a9206b99-2e45-50af-b63e-bebd660051a0" }) {
        title
        body {
          value
        }
        relationships {
          field_materials_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeSteelAndSpecialityMetals(sort: { fields: title, order: DESC }) {
        edges {
          node {
            id
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_steel_and_special_metal {
                localFile {
                  childImageSharp {
                    fixed(height: 360, width: 360) {
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
    data.nodeMaterials.relationships.field_materials_images?.[0].localFile
      ?.childImageSharp.fluid
  const bio = data.nodeMaterials.body.value

  return (
    <Layout>
      <Container>
        <ContainerImg fluid={heroImage} />
      </Container>
      <About>
        <h1>{data.nodeMaterials.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: bio }}></p>
      </About>

      <FlexContainer>
        {data.allNodeSteelAndSpecialityMetals.edges.map(edge => {
          const links = <Link to={`/${edge.node.fields.slug}`}></Link>
          const images =
            edge.node.relationships.field_steel_and_special_metal[0]?.localFile
              ?.childImageSharp.fixed

          if (links.props.to === '/curtain-wall') {
            return (
              <Link to="/curtain-wall/steel">
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
              </Link>
            )
          }
          return (
            <li>
              <Link to={`/steel-and-specialty-metals/${edge.node.fields.slug}`}>
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
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-top: 1rem;

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

export default SteelSpecialtyMetals
