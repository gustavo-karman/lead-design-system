import type { Meta, StoryObj } from '@storybook/react'
import { Card, Text, Checkbox, CheckboxProps } from '@lead-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Card
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm" css={{ color: '$lead500'}}>Aceitar termos de uso</Text>
        </Card>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
