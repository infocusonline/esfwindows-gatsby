import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, RalClassicColours } from '../components/styles/accessories'

export const query = graphql`
  query($slug: String!) {
    nodeAccessories(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      field_additional_text {
        value
      }
      relationships {
        field_accessories_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      relationships {
        node__hardware {
          title
          path {
            alias
          }
          fields {
            slug
          }
          body {
            value
          }
          relationships {
            field_hardware_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 420, maxHeight: 240) {
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
`

const Accessories = ({ data }) => {
  console.log(data, 'hah')
  const title = data.nodeAccessories.title
  const body = data.nodeAccessories.body.value
  const additionaText = data.nodeAccessories.field_additional_text?.value
  const image =
    data.nodeAccessories.relationships.field_accessories_image[0].localFile
      .childImageSharp.fluid

  // GRABBING RELATED DATA FROM DRUPAL
  const relatedHardwareContent =
    data.nodeAccessories.relationships.node__hardware

  return (
    <Layout>
      <Container>
        <div>
          <h1>{title}</h1>

          {additionaText ? (
            <div
              dangerouslySetInnerHTML={{
                __html: additionaText,
              }}
            ></div>
          ) : null}

          <div>
            {relatedHardwareContent ? (
              <div>
                <FlexContainer>
                  {relatedHardwareContent.map(hardware => {
                    // create variables for each piece of data and display on screen
                    const titleRelatedData = hardware.title
                    const imageRelatedData =
                      hardware.relationships.field_hardware_image[0].localFile
                        .childImageSharp.fluid
                    return (
                      <li>
                        {/* {console.log(hardware.path.alias, '!!!9999')} */}

                        <Link to={`${hardware.path.alias}`}>
                          <SetImg fluid={imageRelatedData} />
                          <h2>{titleRelatedData}</h2>
                        </Link>
                      </li>
                    )
                  })}
                </FlexContainer>
              </div>
            ) : null}
          </div>

          <RalClassicColours>
            <p dangerouslySetInnerHTML={{ __html: body }}></p>
          </RalClassicColours>
        </div>
      </Container>
    </Layout>
  )
}

export default Accessories

// styled components
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

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
    padding-top: 1.4rem;

    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`
