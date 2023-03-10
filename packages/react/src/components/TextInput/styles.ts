import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $black',
  display: 'block',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$lead300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray700',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray100',
  },
})
