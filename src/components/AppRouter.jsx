import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../data/routes'

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(item => 
        <Route path={item.path} element={item.element} key={item.path} />
      )}
    </Routes>
  )
}
