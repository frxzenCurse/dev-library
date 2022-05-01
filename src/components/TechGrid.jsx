import React from 'react'
import { Row, Col } from 'antd';
import { TechItem } from './TechItem';

export const TechGrid = ({technologies}) => {
  return (
    <Row gutter={[24, 24]}>
      {technologies.map(item => 
        <Col className="gutter-row" span={8} key={item.id}>
          <TechItem tech={item} />
        </Col>
      )}
    </Row>
  )
}
