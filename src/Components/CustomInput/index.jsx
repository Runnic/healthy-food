import React from 'react'

import { Input } from './styles'

const CustomButton = React.forwardRef((props, ref) => (
  <Input ref={ref} {...props} />
))

CustomButton.displayName = 'CustomButton'

export default CustomButton
