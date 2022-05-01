import React from 'react'
import { Row, Col } from 'antd'
import { ContentItem } from './ContentItem'

export const ContentGrid = ({items}) => {
  return (
    <div className="grid">
      <Row gutter={[24, 24]}>
        {items.map(item => 
          <Col className="gutter-row" span={8} key={item.id}>
            <ContentItem content={item} />
          </Col>
        )}
      </Row>
    </div>
  )
}
