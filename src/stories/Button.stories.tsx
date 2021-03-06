import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from '../components/Button';

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: "Button"        
    }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true
};

export const Small = Template.bind({});
Small.args = {
    size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
    size: "medium"
};

export const Large = Template.bind({});
Large.args = {
    size: "large"
};

export const Round = Template.bind({});
Round.args = {
    round: true
};

export const Ghost = Template.bind({});
Ghost.args = {
    ghost: true
};