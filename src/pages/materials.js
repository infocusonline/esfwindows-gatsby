import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Materials = () => {
  const data = useStaticQuery(graphql`
    query {
      materialBasicPageHeaderImage: nodePage(
        id: { eq: "bbdf6723-50cf-5efd-aebd-35e11c82fa70" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1575, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeMaterials(sort: { fields: title }, skip: 2) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            path {
              alias
            }
            relationships {
              field_materials_images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 520, maxHeight: 340) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      # individual query to link to ALuminum to offer
      aluminum: nodeMaterials(
        id: { eq: "7fa597da-733f-5966-ad38-37a4dbcdd9f0" }
      ) {
        title
        relationships {
          field_materials_images {
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
      aluminumCladPVC: nodeMaterials(
        id: { eq: "daa3d026-1de0-5774-82aa-dca4565308bd" }
      ) {
        title
        relationships {
          field_materials_images {
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
  `)

  const aluminumImageLink =
    data.aluminum.relationships.field_materials_images[0].localFile
      .childImageSharp.fluid

  const alumiumCladPVC =
    data.aluminumCladPVC.relationships.field_materials_images[0].localFile
      .childImageSharp.fluid

  const materialBasicImage =
    data.materialBasicPageHeaderImage.relationships.field_basic_page_image[0]
      .localFile.childImageSharp.fluid
  return (
    <div>
      <Layout>
        <Img fluid={materialBasicImage} />

        <About>
          <h1>{data.materialBasicPageHeaderImage.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.materialBasicPageHeaderImage.body.value,
            }}
          ></div>
        </About>

        <FlexContainer>
          <li>
            <Link to="/offer">
              <SetImg fluid={aluminumImageLink} />
              <h2 className="center">{data.aluminum.title}</h2>
            </Link>
          </li>

          <li>
            <Link to="/offer">
              <SetImg fluid={alumiumCladPVC} />
              <h2>{data.aluminumCladPVC.title}</h2>
            </Link>
          </li>
          {data.allNodeMaterials.edges.map(edge => {
            const images =
              edge.node.relationships.field_materials_images[0].localFile
                .childImageSharp.fluid
            const links = <Link to={`/${edge.node.fields.slug}`}></Link>

            console.log(links.props.to, 'these are the links')
            if (links.props.to === '/aluminum/wood') {
              return (
                <li>
                  <Link to="/products/wood-products">
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/aluminum-clad-wood') {
              return (
                <li>
                  <Link to="/products/wood-products">
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/pvc') {
              return (
                <li>
                  <Link to="/offer">
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/fiberglass') {
              return (
                <li>
                  <Link to="/materials-fiberglass">
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/the-warmth-&-beauty-of-wood') {
              return (
                <li>
                  <Link to="/products/wood-products">
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            return (
              <li key={edge.node.title}>
                <Link to={links.props.to}>
                  <SetImg fluid={images} />
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

// styled Components
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

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: center;
  margin: 90px;

  li {
    list-style-type: none;
    padding: 10px;
  }

  h2 {
    color: #2d385b;
    font-size: 20px;
    margin-top: 15px;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 240px;
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
  border-radius: 50%;
  width: 300px;
  height: 300px;
`

export default Materials
