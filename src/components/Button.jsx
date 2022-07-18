import React from 'react'
import styles from '@styles/components/Button.module.scss'

const Button = ({ text, icon, type = 'primary' }) => {
  const getType = type => {
    if (type === 'primary') return styles.button__primary
    else if (type === 'success') return styles.button__success
    else if (type === 'danger') return styles.button__danger

  }
  return (
    <button className={`${styles.button} ${getType(type)}`}>
      {icon}
      {text}
    </button>
  )
}

export default Button
