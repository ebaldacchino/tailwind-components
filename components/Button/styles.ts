import tw, { styled, css } from 'twin.macro'
import { ButtonStyleProps } from './types'

const generalButtonStyles = () => [
  tw`flex items-center justify-center outline-none transform duration-75 text-white hocus:(scale-105 text-yellow-400)`,
]

const handleButtonSize = ({ size }: ButtonStyleProps) => {
  if (size === 'small') return tw`text-sm`

  if (size === 'medium') return tw`text-lg`

  if (size === 'large') return tw`text-2xl`
}

const handleButtonVsTextOnly = ({ color, variant }: ButtonStyleProps) => {
  if (variant === 'textOnly') {
    if (color === 'white') return tw``

    if (color === 'black') return tw``
  }

  return tw`px-8 py-2 rounded`
}

const handleButtonVariant = ({ variant }: ButtonStyleProps) => {
  if (variant === 'primary') return [tw`bg-black text-white border-black`]

  if (variant === 'secondary')
    return [
      tw`border-2 border-yellow-600 shadow-[0 0.1em 0 0 rgba(0, 0, 0, 0.25)]`,
    ]

  if (variant === 'outline')
    return [
      tw`border-2 border-yellow-600 shadow-[0 0.1em 0 0 rgba(0, 0, 0, 0.25)]`,
    ]

  if (variant === 'textOnly') return tw``
}

const handleAllButtonStyles = () => [
  generalButtonStyles,
  handleButtonVariant,
  handleButtonVsTextOnly,
  handleButtonSize,
  // tw`relative overflow-hidden text-white bg-[#6200ee] px-8 py-4 text-2xl outline-none border-0 rounded cursor-pointer shadow-[0 0 0.5rem rgba(0, 0, 0, 0.3)]`,
  css`
    /* -webkit-tap-highlight-color: transparent; */
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,
]

interface RippleProps {
  size: number
  left: number
  top: number
}

const Ripple = styled.span`
  width: ${(props: RippleProps) => props.size}px;
  height: ${(props: RippleProps) => props.size}px;
  left: ${(props: RippleProps) => props.left}px;
  top: ${(props: RippleProps) => props.top}px;

  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
`

const Btn = styled.button(handleAllButtonStyles)
const BtnA = styled.a(handleAllButtonStyles)

export { Btn, BtnA, Ripple }
