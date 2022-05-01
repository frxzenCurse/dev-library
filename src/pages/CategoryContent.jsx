import React, { useEffect, useState } from 'react'
import { PATH_MAIN } from '../data/routes'
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching'
import { Loader } from '../components/Loader';
import { contentService } from '../service/contentService';
import { Empty } from 'antd';
import { ContentNav } from '../components/ContentNav';
import { ContentGrid } from '../components/ContentGrid';

const options = [
  {value: 'all', text: 'All'},
  {value: 'article', text: 'Articles'},
  {value: 'video', text: 'Videos'},
  {value: 'tool', text: 'Tools'},
]

export const CategoryContent = () => {

  const navigate = useNavigate()
  const {catId} = useParams()

  const [content, setContent] = useState([])
  const [value, setValue] = useState('')
  const [selectValue, setSelectValue] = useState('all')

  const [fetchContent, isLoading, error] = useFetching(async () => {
    const response = await contentService.getContent(catId)

    setContent(response.data)
  })

  useEffect(() => {
    fetchContent()
  }, [])

  function onChange(e) {
    setValue(e.target.value)
  }

  function onSelectChange(e) {
    setSelectValue(e)
  }

  return (
    <div className='container'>
      <Button type="primary" size='default' onClick={() => navigate(PATH_MAIN)}>
        Вернуться на главную
      </Button>
      <div className='wrapper'>
        {error && <div className='error'>{error}</div>}
        {isLoading
          ?
          <Loader />
          :
          <>
            {content.length
              ?
              <>
                <ContentNav 
                  value={value} 
                  onChange={onChange}
                  defaultValue='all'
                  options={options}
                  onSelectChange={onSelectChange}
                />
                <ContentGrid items={content} />
              </>
              :
              <Empty />
            }
          </>
        }
      </div>
    </div>
  )
}
