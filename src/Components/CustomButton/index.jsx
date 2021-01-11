import React from 'react'

import { CustomBtn } from './styles'

export default function CustomButton(props) {
  return <CustomBtn {...props}>{props.children}</CustomBtn>
}
