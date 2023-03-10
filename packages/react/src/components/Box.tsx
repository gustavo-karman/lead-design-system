import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$2xl',
  backgroundColor: '$lead500',
  boxShadow: '0 1px 42px rgba(0, 0, 0, 0.25)',
  
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
