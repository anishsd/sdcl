import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../components/button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});

Default.args = {
  type: 'button',
  children: 'My button',
};
