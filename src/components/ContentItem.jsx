import React from 'react'
import cl from '../styles/ContentItem.module.scss'

export const ContentItem = ({content}) => {
  return (
    <div>
      <a className={cl.preview} href={content.url} target="_blank">
        {content.url}
      </a>
      <div className={cl.description}>{content.description}</div>
    </div>
  )
}
