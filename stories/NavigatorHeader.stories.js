import WEMHeader from '../src/components/NavigatorHeader';
import { html } from 'lit';
import { Horizontal } from './NavigatorMenu.stories';

export default {
    title: 'Components/NavigatorHeader',
    argTypes: {
        text: String,
        orientation: {
            options: ["horizontal", "vertical"],
            control: {type: "radio"}
        },
        items: [],
        menuClick: {
            action: "menuClick"
        }
    },
};

const TemplateEmpty = ({text}) => html`
    <wem-navigator-header text="${text}"></wem-navigator-header>
`;

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    text: "Header"
}

const TemplateWithMenu = ({text, orientation, items, menuClick}) => html`
    <wem-navigator-header text="${text}">
        <wem-navigator-menu orientation="${orientation}" items="${items}" @menuClick="${menuClick}"></wem-navigator-menu>
    </wem-navigator-header>
`;
export const WithMenu = TemplateWithMenu.bind({});
WithMenu.args = {
    text: "Header",
    ...Horizontal.args
}