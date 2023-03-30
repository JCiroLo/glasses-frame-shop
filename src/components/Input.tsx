import React, { FC } from 'react'
import classNames from 'classnames'

import Icon from './Icon'

import '../assets/css/Input.scss'

interface Props {
  type: React.HTMLInputTypeAttribute
  value: string | number
  label: string
  iconName?: string
  className?: string
  onChange: React.ChangeEventHandler
  onIconClick?: React.MouseEventHandler
}

const Input: FC<Props> = ({
  type,
  value,
  label,
  iconName,
  className = '',
  onChange,
  onIconClick
}) => {
  return (
    <div className={classNames('input-container', className)}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
      {iconName && <Icon name={iconName} onClick={onIconClick}></Icon>}
    </div>
  )
}

export default Input
