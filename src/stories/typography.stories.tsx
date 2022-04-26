import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography } from '../components/typography/Typography';

export default {
  title: 'General/Typography',
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
