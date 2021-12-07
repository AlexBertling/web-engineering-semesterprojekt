import WEMNavigator from './Navigator';
import { html } from 'lit';

export default {
    title: 'WEM/Navigator',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        },
        dataUrl: String
    }
};

const Template = ({ styleMode, dataUrl }) => html`
    <wem-navigator styleMode=${styleMode} dataUrl=${dataUrl}></wem-navigator>
`;

export const Grid = Template.bind({});
Grid.args = {
    styleMode: "grid",
    dataUrl: "/navigator.json"
}

export const Flex = Template.bind({});
Flex.args = {
    styleMode: "flex",
    dataUrl: "/navigator.json"
}