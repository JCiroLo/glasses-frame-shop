import { FC } from 'react'
import classNames from 'classnames'

interface IconProps {
  name: string
  type?: 'fas' | 'far' | 'fal' | 'fab' | 'fad'
  fixed?: boolean
  spin?: boolean
  className?: string
  onClick?: React.MouseEventHandler
}

const Icon: FC<IconProps> = ({
  name,
  type = 'fal',
  fixed = true,
  spin = false,
  className,
  onClick
}) => {
  return (
    <i
      className={classNames(className, 'icon', type, `fa-${name}`, {
        'fa-fw': fixed,
        'fa-spin': spin
      })}
      onClick={onClick}
    ></i>
  )
}

export default Icon
