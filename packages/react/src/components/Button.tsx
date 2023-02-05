import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$2xl',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$lead500',

        '&:not(:disabled):hover': {
          background: '$lead300',
        },

        '&:disabled': {
          backgroundColor: '$gray100',
        },
      },

      secondary: {
        color: '$black',
        border: '4px solid $lead500',        
        background: '$lead100',

        '&:not(:disabled):hover': {
          background: '$lead500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          background: '$gray100',
          borderColor: '$gray100',
        },
      },

      tertiary: {
        color: '$white',
        background: '$gray200',
        borderRadius: '$md',

        '&:not(:disabled):hover': {
          background: '$lead300',
        },

        '&:disabled': {
          backgroundColor: '$gray100',
        },
      },
     
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
