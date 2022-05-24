import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../Button';
import { CustomThemeProvider } from '../../custom-theme-provider/CustomThemeProvider';
import { Theme } from '../../../types';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <CustomThemeProvider theme={Theme.Country}>
    <Button {...args}>{args.children}</Button>
  </CustomThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  type: 'button',
  children: 'My button',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/ZOYepFerUPNt1G8SVbPU7t/%F0%9F%91%8C-Application-Design-Library?node-id=6555%3A12390',
  },
};
