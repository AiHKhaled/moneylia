import React from 'react'
import CustomIconType from '../@types/CustomIconType'
import Svg, { Path } from 'react-native-svg'

export const ArrowLeftIcon: React.FC<CustomIconType> = ({
  color,
  size,
}: CustomIconType) => {
  return (
    <Svg width='28' height='28' viewBox='0 0 28 28' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M18.325 5.00846C18.7807 5.46407 18.7807 6.20276 18.325 6.65837L10.9833 14.0001L18.325 21.3418C18.7807 21.7974 18.7807 22.5361 18.325 22.9917C17.8694 23.4473 17.1307 23.4473 16.6751 22.9917L8.50846 14.825C8.05285 14.3694 8.05285 13.6307 8.50846 13.1751L16.6751 5.00846C17.1307 4.55285 17.8694 4.55285 18.325 5.00846Z'
        fill={color || 'white'}
      />
    </Svg>
  )
}
