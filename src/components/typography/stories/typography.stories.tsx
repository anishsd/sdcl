import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography } from '../Typography';

export default {
  title: 'Design Tokens/Typography',
  component: Typography,
} as Meta;

const Template: Story = (args) => (
  <Typography type={args.type}>{args.children}</Typography>
);

export const Default = Template.bind({});

Default.args = {
  children: 'Hello World',
  type: 'h1',
};
