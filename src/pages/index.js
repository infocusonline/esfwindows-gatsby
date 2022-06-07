import React from 'react'
import Layout from '../components/HomePage/Layout'
import Head from '../components/HomePage/Head'
import Welcome from '../components/HomePage/Welcome'
import CompanyContent from '../components/HomePage/CompanyContent'
import WindowContent from '../components/HomePage/WindowContent'
import DoorContent from '../components/HomePage/DoorContent'
import BlogPreview from '../components/HomePage/blogPreview'
import Quote from '../components/HomePage/QuoteRequest'

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <Welcome />
      <CompanyContent />
      <WindowContent />
      <DoorContent />
      <BlogPreview />
      <Quote />
    </Layout>
  )
}

export default Home
