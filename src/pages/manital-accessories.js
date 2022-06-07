import React, { useState } from 'react'
import { useStaticQuery, Link } from 'gatsby'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'
import Layout from '../components/Layout'

const Temp = () => {
  return (
    <Layout>
      <p>under constructions</p>
    </Layout>
  )
}

export default Temp

// const ManitalAccessories = () => {
//   const [hover, setHover] = useState(false)

//   const data = useStaticQuery(graphql`
//     query {
//       allBlockContentManitalAccessories {
//         edges {
//           node {
//             field_manital_accessories_title
//             field_manital_accessor_link {
//               uri
//               title
//             }
//             relationships {
//               field_manital_accessories_image {
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 400, maxHeight: 400) {
//                       ...GatsbyImageSharpFluid
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <h1 style={{ marginTop: '100px' }}>
//         testing page, manital accesories items
//       </h1>

//       <FlexContainer>
//         {data.allBlockContentManitalAccessories.edges.map(edge => {
//           const manitalAccessoriesImage =
//             edge.node.relationships.field_manital_accessories_image[0].localFile
//               .childImageSharp.fluid

//           return (
//             <li>
//               <h2>{edge.node.field_manital_accessories_title}</h2>
//               <SetImg fluid={manitalAccessoriesImage} />
//               <button
//                 onMouseOver={() => {
//                   // console.log('entered mouse over')
//                   setHover(true)
//                 }}
//                 onMouseOut={() => {
//                   // console.log('entered onMouseOut')
//                   setHover(false)
//                 }}
//               >
//                 Click here
//               </button>

//               <Container>
//                 {hover && <Img fluid={manitalAccessoriesImage} />}
//               </Container>
//             </li>
//           )
//         })}
//       </FlexContainer>
//     </Layout>
//   )
// }

// // styled components

// const FlexContainer = styled.ul`
//   display: flex;
//   flex-wrap: wrap;
//   /* flex-direction: row-reverse; */
//   justify-content: space-between;
//   padding: 0.4rem;

//   h2 {
//     font-size: 1.3em;
//     text-align: center;
//     color: #2d385b;
//   }

//   li {
//     margin: 0.3rem;
//     list-style-type: none;
//   }

//   a {
//     text-decoration: none;
//     color: #000000;
//   }
// `

// const SetImg = styled(Img)`
//   /* border: 1px solid red; */
//   display: block !important;
//   padding: 10px;
//   margin: 12px;
//   flex-grow: 1;
//   width: 330px;
//   border-radius: 2%;
// `

// const Container = styled.ul`
//   position: 'relative';
//   display: 'flex';
// `

// const HoverImage = styled(Img)`
//   border: 1px solid red;
//   box-sizing: 'border-box';
//   position: 'absolute';
//   width: 'auto';
//   bottom: '100%';
//   left: '50%';
//   border-radius: '3px';
//   background-color: 'hsla(0, 0%, 20%, 0.9)';
//   padding: '7px';
//   margin-bottom: '5px';
//   color: '#fff';
//   text-align: 'center';
//   font-size: '14px';

//   padding: 10px;
//   margin: 12px;
//   width: 330px;
//   border-radius: 2%;
// `

// export default ManitalAccessories
