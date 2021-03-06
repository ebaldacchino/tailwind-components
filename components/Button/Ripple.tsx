import React from 'react'
import tw, { styled } from 'twin.macro' 

interface RippleProps {
  x: number
  y: number
  size: number
} 

const RippleContainer = styled.div`
  ${tw`absolute inset-0`}
`

const Ripple = styled.span`
  ${tw`absolute pointer-events-none rounded-[100%] opacity-25 bg-white animate-[ripple 850ms]`}
  transform: scale(0);
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: Function,
) => {
  React.useLayoutEffect(() => {
    let bounce: any = null
    if (rippleCount > 0) {
      clearTimeout(bounce)
      bounce = setTimeout(() => {
        cleanUpFunction()
        return clearTimeout(bounce)
      }, duration * 4)
    } else {
      return clearTimeout(bounce)
    }
  }, [rippleCount, duration, cleanUpFunction])
}

const Ripples = ({ duration = 850 }) => {
  const [rippleArray, setRippleArray]: [RippleProps[], any] = React.useState([])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = (e: any) => {
    const {
      width,
      height,
      x: left,
      y: top,
    } = e.currentTarget.getBoundingClientRect()
    const size = width > height ? width : height
    const x = e.pageX - left - size / 2
    const y = e.pageY - top - size / 2
    const newRipple: RippleProps = {
      x,
      y,
      size,
    }

    setRippleArray((prevState: RippleProps[]) => [...prevState, newRipple])
  }

  return (
    <RippleContainer onPointerDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => (
          <Ripple key={'span' + index} {...ripple} />
        ))}
    </RippleContainer>
  )
}

export default Ripples
