// import React from 'react'
// import { graphql, Link } from 'gatsby'
// import Img from 'gatsby-image'
// import styled from 'styled-components'
// import Layout from '../components/Layout'

// export const query = graphql`
//   query($slug: String!) {
//     nodeOfferType(fields: { slug: { eq: $slug } }) {
//       #   id
//       title
//       body {
//         value
//       }
//       relationships {
//         field_offer_type_image {
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 800, maxHeight: 250) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//       relationships {
//         node__alu_offer_sub_items {
//           title
//           body {
//             value
//           }
//         }
//         node__pvc_offer_sub_items_ {
//           title
//           body {
//             value
//           }
//           path {
//             alias
//           }
//           relationships {
//             field_pvc_offer_subitems_image {
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 420, maxHeight: 420) {
//                     ...GatsbyImageSharpFluid
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const Offer = ({ data }) => {
//   console.log(data.nodeOfferType, 'ALL DATA')
//   const image =
//     data.nodeOfferType.relationships.field_offer_type_image[0].localFile
//       .childImageSharp.fluid

//   //   if they have relationships which they all will then render all of the images
//   const allContentItems =
//     data.nodeOfferType.relationships.node__pvc_offer_sub_items_

//   //   console.log(allContentItems, 'WHAT IS THIS')

//   //   GET ALL OF THE ALUMINUM IMAGES
//   const aluImages = data.nodeOfferType.relationships
//   console.log(aluImages, 'trying to grab alu images')
//   return (
//     <Layout>
//       <div>
//         <h1 style={{ marginTop: '100px', textAlign: 'center' }}>
//           {data.nodeOfferType.title}
//         </h1>
//         <div>
//           <Img fluid={image} />
//         </div>
//       </div>

//       <FlexContainer>
//         {allContentItems ? (
//           allContentItems.map(contentItem => {
//             const subPVCImage =
//               contentItem.relationships.field_pvc_offer_subitems_image.localFile
//                 .childImageSharp.fluid

//             return (
//               <li key={contentItem.path.alias}>
//                 <h1>{contentItem.title}</h1>
//                 <Link to={`/${contentItem.path.alias}`}>
//                   <SetImg fluid={subPVCImage} />
//                 </Link>
//               </li>
//             )
//           })
//         ) : (
//           <div>No image</div>
//         )}
//       </FlexContainer>
//     </Layout>
//   )
// }

// // styled components
// const FlexContainer = styled.ul`
//   padding: 0.6rem;
//   display: flex;
//   flex-wrap: wrap;

//   flex-direction: row;
//   justify-content: space-around;
//   margin: 60px auto;

//   h1 {
//     color: #2d385b;
//     font-size: 1.2rem;
//   }

//   li {
//     margin: 1rem;

//     list-style-type: none;
//     text-align: center;
//     font-weight: 30;
//     a {
//       text-decoration: none;
//       color: #000;
//     }

//     p {
//       text-align: center;
//       width: 258px;
//       margin: 0 auto;
//     }
//   }
// `

// const SetImg = styled(Img)`
//   display: block !important;
//   margin: 6px;
//   flex-grow: 1;
//   width: 330px;
//   border-radius: 2%;
// `

// export default Offer
