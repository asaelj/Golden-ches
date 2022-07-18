import React from 'react'
import Header from './Header'
import Container from './Container'
import styles from '@styles/components/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <section className={styles.layout}>
      <Header />
      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Layout
