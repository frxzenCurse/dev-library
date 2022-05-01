import React from 'react'
import { Menu } from 'antd';

function getItem(label, key, children, theme) {
  return {
    key,
    children,
    label,
    theme,
  };
}

export const Navbar = ({technologies}) => {

  return (
    <div className='navbar'>
      <Menu
        theme='dark'
        mode="inline"
        items={technologies.map(item => 
          getItem(item.name, item.id, item.categories.map(cat => getItem(cat.name, `${cat.name}${cat.id}`)))
        )}
      />
    </div>
  )
}
