import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const NewPageWoodTesting = () => {
  const data = useStaticQuery(graphql`
    query {
      WindowsProductImage: nodeProducts(
        id: { eq: "fd84c217-3940-52d0-940e-ccf456a4b887" }
      ) {
        id
        title
        body {
          value
        }
        relationships {
          field_products_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 2000, maxHeight: 680) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeProductsWindows {
        edges {
          node {
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_product_windows_image {
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
  console.log(data, 'lol')

  const headerImage =
    data.WindowsProductImage.relationships.field_products_images[0].localFile
      .childImageSharp.fluid
  const about = data.WindowsProductImage.body.value

  return (
    <Layout>
      <Layout>
        <Container>
          <ContainerImg fluid={headerImage} />
        </Container>
        {about ? <Bio dangerouslySetInnerHTML={{ __html: about }}></Bio> : null}

        <FlexContainer>
          {data.allNodeProductsWindows.edges.map((edge) => {
            const links = <Link to={`/${edge.node.fields.slug}`}></Link>
            console.log(links.props.to, '@@@@')
            const images =
              edge.node.relationships.field_product_windows_image.localFile
                .childImageSharp.fixed

            if (links.props.to === '/pvc') {
              return (
                <li>
                  <Link to="/testing-pvc">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/alu') {
              return (
                <li>
                  <Link to="/offer/alu-offer/windows">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }

            if (links.props.to === '/fiberglass') {
              return (
                <li>
                  <Link to="/materials-fiberglass">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }

            if (links.props.to === '/alu-clad-wood') {
              return (
                <li>
                  <Link to="/products/alu-clad-windows">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/steel') {
              return (
                <li>
                  <Link to="/steel-and-specialty-metals/windows">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            if (links.props.to === '/wood') {
              return (
                <li>
                  <Link to="/404">
                    <SetImg fixed={images} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              )
            }
            return (
              <li>
                {images ? (
                  <>
                    <Link>
                      <SetImg fixed={images} />
                      <h2>{edge.node.title}</h2>
                    </Link>
                  </>
                ) : null}
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
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

const Bio = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: center;
`

const ContainerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: 980px;
  height: 22vw;
  clip-path: polygon(10vw 0, 100% 0, 100% 100%, 0% 100%);
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  li {
    list-style-type: none;
    margin: 20px;
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

export default NewPageWoodTesting
