import Link from 'next/link'
import { Btn, BtnA, Ripple } from './styles'
import { ButtonComponentProps } from './types'

const Button = ({
  children,
  href = '',
  onClick,
  size = 'medium',
  variant = 'primary',
  color = 'white',
}: ButtonComponentProps) => {
  const props = { color, onClick, size, variant }

  if (href)
    return (
      <Link href={href} passHref>
        <BtnA {...props}>
          {children}
          <Ripple size={10} left={10} top={10} />
        </BtnA>
      </Link>
    )
  return (
    <Btn {...props}>
      {children} <Ripple size={10} left={10} top={10} />
    </Btn>
  )
}

export default Button
