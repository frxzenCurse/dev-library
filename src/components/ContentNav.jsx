import React from 'react'
import { Row, Col, Input, Select } from 'antd'

const { Option } = Select;

export const ContentNav = ({value, onChange, onSelectChange, defaultValue, options}) => {
  return (
    <Row gutter={30}>
      <Col className="gutter-row" span={18}>
        <Input size='large' placeholder="Поиск" value={value} onChange={onChange} />
      </Col>
      <Col className="gutter-row" span={6}>
      <Select 
        size='large' 
        defaultValue={defaultValue} 
        onChange={onSelectChange} 
        style={{ width: '100%' }}
      >
        {options.map(item => 
          <Option value={item.value} key={item.value}>{item.text}</Option>
        )}
      </Select>
      </Col>
    </Row>
  )
}
