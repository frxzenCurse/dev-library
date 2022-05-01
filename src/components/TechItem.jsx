import React from 'react'
import cl from '../styles/TechItem.module.scss'
import { Typography } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATH_CATEGORY } from '../data/routes';

const { Title } = Typography;

export const TechItem = ({tech}) => {

  const navigate = useNavigate()

  return (
    <div className={cl.card}>
      <div className={cl.title}>
        <Title level={3}>{tech.name}</Title>
      </div>
      <div className={cl.buttons}>
        {tech.categories.map((item, i) =>
          <Button type="primary" size='default' key={item.id} onClick={() => navigate(PATH_CATEGORY + item.id)}>
            {item.name}
          </Button>
        )}
      </div>
      {tech.categories.length > 3
        ?
        <div className={cl.show}>
          <Button type="link" size='small'>
            Показать еще
          </Button>
        </div>
        :
        <></>
      }
    </div>
  )
}
