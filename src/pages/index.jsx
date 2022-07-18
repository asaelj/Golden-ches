import React from 'react'
import Layout from '@components/Layout'
import Button from '@components/Button'
import { FaNewspaper } from 'react-icons/fa'

const Index = () => {
  return (
    <Layout>
      <Button
        text='Hola mundo'
        icon={<FaNewspaper />}
      />
    </Layout>
  )
}

export default Index
