import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Text, TextProps } from '../components/Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: "Sample text"        
    }
} as ComponentMeta<typeof Text>;


const Template: ComponentStory<typeof Text> = (args: TextProps) => <Text {...args} />;


export const Default = Template.bind({});
Default.args = {};

export const Muted = Template.bind({});
Muted.args = {
    muted: true
};

export const Weight = Template.bind({});
Weight.args = {
    fontWeight: 200
};

export const Italic = Template.bind({});
Italic.args = {
    italic: true
};

export const AsParagraph = Template.bind({});
AsParagraph.args = {
    as: "p"
};