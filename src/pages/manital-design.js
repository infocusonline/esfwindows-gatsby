import React from 'react'
import Layout from '../components/Layout'
import ManitalDesignComponent from '../components/blocks/manitalDesign'

// created custom block on drupal that displays all of
// the Manital Design products. Check Drupal "custum blocks"

const ManitalDesign = () => {
  return (
    <Layout>
      <h2 style={{ paddingTop: '120px', textAlign: 'center' }}>
        Manital Design{' '}
      </h2>
      <ManitalDesignComponent />
    </Layout>
  )
}

export default ManitalDesign
