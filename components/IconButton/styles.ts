import tw, { styled } from 'twin.macro'
import {
  generalButtonStyles,
  handleButtonSize,
  handleButtonVsTextOnly,
} from '../Button/styles'

const IconBtn = styled.button([
  generalButtonStyles,
  handleButtonSize,
  handleButtonVsTextOnly,
  tw`p-2`,
])

export default IconBtn