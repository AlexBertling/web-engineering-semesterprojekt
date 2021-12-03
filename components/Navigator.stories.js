import WEMNavigator from './Navigator';
import { html } from 'lit';

export default {
    title: 'WEM/Navigator',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        }
    }
};

const Template = ({ styleMode }) => html`
    <wem-navigator styleMode=${styleMode}></wem-navigator>
`;

export const Grid = Template.bind({});
Grid.args = {
    styleMode: "grid"
}

export const Flex = Template.bind({});
Flex.args = {
    styleMode: "flex"
}