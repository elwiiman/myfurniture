import { ComponentMeta, ComponentStory } from '@storybook/react';

import Cart from './Cart';

export default {
    title: 'Icons/Cart',
    component: Cart,
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Default = Template.bind({});
Default.args = {
    width: 23,
    height: 22,
};
