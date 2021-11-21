import React from 'react'
import Link from 'next/link'
import { Btn, BtnA } from './styles'
import Ripple from './Ripple'
import { ButtonComponentProps } from './types'
import { AnimatePresence } from 'framer-motion'

const Button = ({
  children,
  href = '',
  onClick,
  size = 'medium',
  variant = 'primary',
  color = 'white',
}: ButtonComponentProps) => {
  const [componentRendered, setComponentRendered] = React.useState(false)

  const RippleContainer = () => (
    <AnimatePresence>{componentRendered && <Ripple />}</AnimatePresence>
  )

  React.useEffect(() => {
    setComponentRendered(true)
  }, [])

  const props = { color, onClick, size, variant }

  if (href)
    return (
      <Link href={href} passHref>
        <BtnA {...props}>
          {children}
          <RippleContainer />
        </BtnA>
      </Link>
    )
  return (
    <Btn {...props}>
      {children}
      <RippleContainer />
    </Btn>
  )
}

export default Button
