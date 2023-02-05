import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps, Heading, Text } from '@lead-ui/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    children: 
    <>
      <Heading css={{ color: '$lead500'}}>Título</Heading>
      <Text css={{ color: '$gray800', marginTop:10}}>Testando o elemento Card</Text>
    </>
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
