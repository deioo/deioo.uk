import tw from 'tailwind.macro'
import styled, { keyframes, css } from 'styled-components'

const upDown = drop => keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(${drop}px);
  }
`

const upDownAnimation = (delay, duration, drop) => css`
  animation: ${upDown(drop)} ${duration}s ease-in-out ${delay}ms infinite alternate;
`

export const UpDown = styled.span`
  ${props =>
    props.drop
      ? upDownAnimation(props.delay || 10, props.duration || 6, 12)
      : upDownAnimation(props.delay || 10, props.duration || 6, 4)}
  ${tw`inset-0 inline-block`};
`
