import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Company = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeCompany(id: { eq: "f7298310-0a48-5cdb-9530-eda0ac72827f" }) {
        title
        body {
          value
        }
        relationships {
          field_company {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1575, maxHeight: 710) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      aboutUsImage: nodeCompany(
        id: { eq: "bc160b51-d41e-54af-8f4c-fe2fecf162f6" }
      ) {
        relationships {
          field_company {
            localFile {
              childImageSharp {
                fixed(width: 400, height: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  const aboutUsImg =
    data.aboutUsImage.relationships.field_company[0].localFile.childImageSharp
      .fixed

  const aboutUsBody = data.nodeCompany.body.value

  return (
    <div>
      <Layout>
        <Img
          fluid={
            data.nodeCompany.relationships.field_company[0].localFile
              .childImageSharp.fluid
          }
        />
        <About>
          {/* <div>
            <Img fixed={aboutUsImg} />
          </div> */}
          <h1>{data.nodeCompany.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: aboutUsBody }}></p>
        </About>
      </Layout>
    </div>
  )
}

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
export default Company

// // {data.allNodeCompany.edges.map(edge => {
//   console.log(edge, '^66666^^^^')
//   const image =
//     edge.node.relationships.field_company[0].localFile.childImageSharp
//       .fluid
//   const body = edge.node.body.value
//   console.log(edge)
//   return (
//     <div>
//       <Img fluid={image} />
//       <About>
//         <h1>{edge.node.title}</h1>
//         <p dangerouslySetInnerHTML={{ __html: body }}></p>
//       </About>
//     </div>
//   )
// })}
