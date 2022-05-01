import React from 'react'
import { TechGrid } from '../components/TechGrid'
import { useSelector } from 'react-redux'

export const Main = () => {

  const {technologies} = useSelector(state => state.technology)

  return (
    <div className='container'>
      <TechGrid technologies={technologies} />
    </div>
  )
}