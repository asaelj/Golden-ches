import React from 'react'
import styles from '@styles/components/Layout.module.scss'

const Container = ({ children }) => {
  return (
    <div className={styles.layout__body}>
      {children}
    </div>
  )
}

export default Container
