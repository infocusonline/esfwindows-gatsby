import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import FormOptionTwo from '../components/forms/FormOptionTwo'

export const query = graphql`
  query($slug: String!) {
    nodePvcOfferSlidingWindows(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      field_pvc_offer_sliding_windows_ {
        uri
        title
      }
    }
  }
`

const PvcSlidingDoors = ({ data }) => {
  const videoTitle =
    data.nodePvcOfferSlidingWindows.field_pvc_offer_sliding_windows_[0]?.title

  const videoLink =
    data.nodePvcOfferSlidingWindows.field_pvc_offer_sliding_windows_[0]?.uri

  const body = data.nodePvcOfferSlidingWindows.body.value
  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSlidingWindows.title}</h1>
      </Container>
      <BodyContainer dangerouslySetInnerHTML={{ __html: body }}></BodyContainer>
      <Video>
        {videoTitle && videoLink ? (
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: videoTitle }}></h2>
            <VideoContainer>
              <iframe
                width="60px"
                height="70px"
                align="middle"
                src={videoLink}
              ></iframe>
            </VideoContainer>
          </div>
        ) : null}
      </Video>
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

const Video = styled.div`
  padding-top: 25px;
  h2 {
    margin-top: 100px;
    text-align: center;
  }
`

const BodyContainer = styled.div`
  max-width: 1030px;
  /* border: 1px solid red; */
  // padding: 120px;
  margin: 0 auto;
`

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 50.25%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 80px;
  }
`

export default PvcSlidingDoors
