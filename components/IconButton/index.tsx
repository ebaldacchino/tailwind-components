import React from 'react'
import IconBtn from './styles'
export default function IconButton({
  children,
  href = '',
  onClick,
  size = 'medium', 
  color = 'white',
}: any) {
  const [componentRendered, setComponentRendered] = React.useState(false)

  const props = { color, onClick, size, variant: 'textOnly' }
  React.useEffect(() => {
    setComponentRendered(true)
  }, [])

  return <IconBtn {...props}>{children}</IconBtn>
}
