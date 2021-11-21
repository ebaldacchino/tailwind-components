export type ButtonSizeProps = 'small' | 'medium' | 'large'
export type ButtonVariantProps =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'textOnly'
type TextColorProps = 'white' | 'black'

export interface ButtonComponentProps {
  color?: TextColorProps
  children?: any
  href?: string
  onClick?: any
  size?: ButtonSizeProps
  variant?: ButtonVariantProps
}

export interface ButtonStyleProps {
  color: TextColorProps
  size: ButtonSizeProps
  variant: ButtonVariantProps
}
