import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@lead-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text css={{ color: '$lead800'}}>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
