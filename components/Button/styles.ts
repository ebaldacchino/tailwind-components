import tw, { styled, css } from 'twin.macro'
import { ButtonStyleProps } from './types'

const generalButtonStyles = () => [
  tw`overflow-hidden select-none px-8 py-2 rounded flex items-center justify-center outline-none transform duration-75 text-white hocus:(scale-105 text-yellow-400)`,
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

  return tw``
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
  css`
    -webkit-tap-highlight-color: transparent;
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `,
]

const Btn = styled.button(handleAllButtonStyles)
const BtnA = styled.a(handleAllButtonStyles)

export { Btn, BtnA }
