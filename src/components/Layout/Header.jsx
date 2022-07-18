import React from 'react'
import Image from 'next/image'
import logo from '@assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import styles from '@styles/components/Layout.module.scss'

const Header = () => {
  return (
    <header className={styles.layout__header}>
      <button className={styles.layout__hamburger}>
        <FiMenu />
      </button>

      <div className={styles.layout__title}>
        <Image
          src={logo}
          width={50}
          height={50}
          alt='golden chess'
        />
        <p>Golden Ches</p>
      </div>
    </header>
  )
}

export default Header
