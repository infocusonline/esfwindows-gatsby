import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    nodeEntranceDoors(fields: { slug: { eq: $slug } }) {
      id
      title
      field_entrance_door_link {
        title
        uri
      }
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_entrance_door_type {
          localFile {
            childImageSharp {
              fluid(maxWidth: 980, maxHeight: 460) {
                base64
              }
            }
          }
        }
      }
    }
  }
`

const EntranceDoors = ({ data }) => {
  const body = data.nodeEntranceDoors.body.value
  const link = data.nodeEntranceDoors.field_entrance_door_link[0].uri
  const linkTitle = data.nodeEntranceDoors.field_entrance_door_link[0].title
  // console.log(link, linkTitle)
  return (
    <div>
      <Layout>
        <Container>
          <h2>{data.nodeEntranceDoors.title}</h2>

          <BodyContainer
            dangerouslySetInnerHTML={{ __html: body }}
          ></BodyContainer>
          {linkTitle && link ? (
            <div>
              <a target="_blank" href={link}>
                {linkTitle}
              </a>
            </div>
          ) : null}
        </Container>
      </Layout>
    </div>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    padding-top: 60px;
    margin-top: 90px;
  }
`
const BodyContainer = styled.div`
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;
`

export default EntranceDoors
