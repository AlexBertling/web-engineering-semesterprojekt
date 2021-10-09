import React from 'react';
import { A23 } from './a23';

export default {
    title: 'WEM/A23',
    component: A23,
};

const Template = (args) => <A23 {...args} />;

export const Flexbox = Template.bind({});

Flexbox.args = {
    styleMode: 'flex',
};

export const Grid = Template.bind({});

Grid.args = {
    styleMode: 'grid',
};