import Link from 'next/link'
import { Btn, BtnA } from './styles'
import Ripple from './Ripple'
import { ButtonComponentProps } from './types'
import { useEffect, useState } from 'react'

const Button = ({
  children,
  href = '',
  onClick,
  size = 'medium',
  variant = 'primary',
  color = 'white',
}: ButtonComponentProps) => {
  const [componentRendered, setComponentRendered] = useState(false)

  useEffect(() => {
    setComponentRendered(true)
  }, [])

  const props = { color, onClick, size, variant }

  if (href)
    return (
      <Link href={href} passHref>
        <BtnA {...props}>
          {children}
          {componentRendered && <Ripple />}
        </BtnA>
      </Link>
    )
  return (
    <Btn {...props}>
      {children} {componentRendered && <Ripple />}
    </Btn>
  )
}

export default Button
