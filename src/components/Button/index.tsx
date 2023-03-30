import { FC } from 'react'
import classNames from 'classnames'
import './styles.scss'

interface Props {
  className?: string
  variant?: 'primary' | 'light'
}

const Button: FC<Props> = ({ children, className, variant = 'primary' }) => {
  return (
    <button className={classNames(className, 'button-container', variant)}>
      {children}
    </button>
  )
}

export default Button
