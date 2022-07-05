import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button, ButtonProps } from "../components/Button";

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

const DEFAULT_PROPS: ButtonProps = {
    children: "Button"
}

export const Primary = Template.bind({});
Primary.args = {
    ...DEFAULT_PROPS
};

export default {
    title: 'Components/Button',
    component: Button
} as ComponentMeta<typeof Button>;