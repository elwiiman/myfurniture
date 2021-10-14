import { ComponentMeta, Story } from '@storybook/react';

import Logo from './Logo';

export default {
    title: 'Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: Story = () => <Logo />;

export const Default = Template.bind({});
Default.args = {};
