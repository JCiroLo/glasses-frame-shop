import { FC } from 'react'
import classNames from 'classnames'

import { GlassFrameType } from '../typings/custom'

import '../assets/css/Frame.scss'

interface FrameProps {
  data: GlassFrameType
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const Frame: FC<FrameProps> = ({ children, data, className = '', onClick }) => {
  return (
    <div className={classNames('frame-container', className)} onClick={onClick}>
      <img src={data.image[0]} alt='glass_frame' />
      {data.discount > 0 && <span className='offer'>En oferta</span>}
      <div className='info'>
        <h5>{data.brand}</h5>
        <p className='price'>
          {data.discount ? (
            <>
              <span>${new Intl.NumberFormat('de-DE').format(data.price)}</span>{' '}
              <strong>
                $
                {new Intl.NumberFormat('de-DE').format(
                  data.price * (1 - data.discount / 100)
                )}
              </strong>
            </>
          ) : (
            <strong>
              ${new Intl.NumberFormat('de-DE').format(data.price)}
            </strong>
          )}
        </p>
      </div>
      <div className='actions'>{children}</div>
    </div>
  )
}

export default Frame
