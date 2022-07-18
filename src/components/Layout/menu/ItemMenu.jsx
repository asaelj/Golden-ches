import React from 'react'

const ItemMenu = ({ name, Icon, selected }) => {
  return (
    <li>
      <Icon />
      <h4>{name}</h4>
    </li>
  )
}

export default ItemMenu
