import { FC } from 'react'
import classNames from 'classnames'

import './styles.scss'

interface TogglerProps {}

interface Props {
  className?: string
  Toggler: TogglerProps
}

const Dropdown: FC<Props> = ({ children, className }) => {
  console.log(children)

  return <div className={classNames('dropdown-container', className)}></div>
}

export default Dropdown
