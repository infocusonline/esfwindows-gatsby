import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const AluCladDoors = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeAlucladType(id: { eq: "79e95d27-8db1-5ce8-bb8f-31762f29a29f" }) {
        title
        id
        body {
          value
        }
        relationships {
          field_aluclad_type_image {
            localFile {
              childImageSharp {
                fixed(width: 2000, height: 680) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }

      allNodeAluCladDoor {
        edges {
          node {
            title
            fields {
              slug
            }
            relationships {
              field_door_aluclad_img {
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
    data.nodeAlucladType.relationships.field_aluclad_type_image[0]?.localFile
      ?.childImageSharp.fixed
  const about = data.nodeAlucladType.body.value
  return (
    <div>
      <Layout>
        <Container>
          <h1>{data.nodeAlucladType.title}</h1>
          {heroImage ? <ContainerImg fixed={heroImage} /> : null}
        </Container>
        <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio>

        <FlexContainer>
          {data.allNodeAluCladDoor.edges.map((edge) => {
            const images =
              edge.node.relationships.field_door_aluclad_img[0]?.localFile
                ?.childImageSharp?.fixed

            return (
              <li key={edge.node.id}>
                {/* turn into template */}

                <Link to={`/alu-clad-doors/${edge.node.fields.slug}`}>
                  <SetImg fixed={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
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
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`
export default AluCladDoors
