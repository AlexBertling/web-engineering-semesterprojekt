import WEMApp from '../src/App';
import { html } from 'lit';

export default {
    title: 'WEM/App',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        },
        dataUrl: String
    }
};

const Template = ({ styleMode, dataUrl }) => html`
    <wem-app styleMode=${styleMode} dataUrl=${dataUrl}></wem-app>
`;

export const Grid = Template.bind({});
Grid.args = {
    styleMode: "grid",
    dataUrl: "/assets/navigator.json"
}

export const Flex = Template.bind({});
Flex.args = {
    styleMode: "flex",
    dataUrl: "/assets/navigator.json"
}