import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/HomePage/Layout'
import Head from '../components/HomePage/Head'
import Form from '../components/forms/Form'

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1 style={{ paddingTop: '130px', textAlign: 'center' }}>Hello there!</h1>
      <Link to="/" style={{ paddingTop: '40px', textAlign: 'center' }}>
        Head Home
      </Link>

      <p style={{ paddingTop: '130px', textAlign: 'center' }}>
        Page is currently under construction or you have stumbled upon a non
        existent page.
      </p>
      <Form />
    </Layout>
  )
}

export default NotFound
