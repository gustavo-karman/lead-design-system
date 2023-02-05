import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Card = styled('div', {
  padding: '$4',
  borderRadius: '$2xl',
  backgroundColor: '$white',
  boxShadow: '0 1px 42px rgba(0, 0, 0, 0.25)',
  
})

export interface CardProps extends ComponentProps<typeof Card> {
  as?: ElementType
}

Card.displayName = 'Card'
