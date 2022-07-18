import React from 'react'

const Menu = ({ children }) => {
  return (
    <nav>
      <ul>
        {children}
      </ul>
    </nav>
  )
}

export default Menu
