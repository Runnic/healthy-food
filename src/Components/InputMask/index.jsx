import React from 'react'
import Mask from 'react-input-mask'
import { Input } from './styles'

const InputMask = React.forwardRef((props, ref) => {
  const {
    mask,
    maskChar,
    alwaysShowMask,
    defaultValue,
    disabled,
    onChange,
    onFocus,
    value
  } = props

  return (
    <Mask
      mask={mask}
      maskChar={maskChar}
      alwaysShowMask={alwaysShowMask}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      maskPlaceholder=""
    >
      <Input type="text" ref={ref} {...props} />
    </Mask>
  )
})

InputMask.displayName = 'input-mask'

export default InputMask
