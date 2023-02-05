import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps, Heading, Text } from '@lead-ui/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    children: 
    <>  
      <Heading>Título</Heading>
      <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Text>
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
