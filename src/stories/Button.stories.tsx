import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '../components/Button';

export default {
    title: 'Components/Button',
    component: Button,
} as ComponentMeta<typeof Button>;


const _defaultProps = {
    children: "Button"
} as ButtonProps;


const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
    ..._defaultProps
};

export const Small = Template.bind({});
Small.args = {
    ..._defaultProps,
    size: "small"
};

export const Large = Template.bind({});
Large.args = {
    ..._defaultProps,
    size: "large"
};

export const Round = Template.bind({});
Round.args = {
    ..._defaultProps,
    round: true
};

export const Ghost = Template.bind({});
Ghost.args = {
    ..._defaultProps,
    ghost: true
};