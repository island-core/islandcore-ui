import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Alert, AlertProps } from '../components/Alert';

export default {
    title: 'Components/Alert',
    component: Alert,
    args: {
        items: [
            {title: "Alert title 1", children: "Alert body"}
        ]
    }
} as ComponentMeta<typeof Alert>;


const Template: ComponentStory<typeof Alert> = (args: AlertProps) => <Alert {...args} />;


export const Default = Template.bind({});
Default.args = {};