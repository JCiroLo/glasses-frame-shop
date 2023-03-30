import { FC } from 'react'
import classNames from 'classnames'

import Icon from '../Icon'

import './styles.scss'

interface Props {
  className?: string
  state: boolean
  onClick: React.MouseEventHandler
}

const ButtonToggler: FC<Props> = ({ state, className = '', onClick }) => {
  return (
    <button className={classNames('btn-toggler', className)} onClick={onClick}>
      <Icon className={classNames({ active: state })} name='times'></Icon>
      <Icon className={classNames({ active: !state })} name='bars'></Icon>
    </button>
  )
}

export default ButtonToggler
