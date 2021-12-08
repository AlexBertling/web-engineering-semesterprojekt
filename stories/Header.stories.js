import WEMHeader from '../components/Header';
import { html } from 'lit';
import { Horizontal } from './Menu.stories';

export default {
    title: 'WEM/Header',
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
    <wem-header text="${text}"></wem-header>
`;

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    text: "Header"
}

const TemplateWithMenu = ({text, orientation, items, menuClick}) => html`
    <wem-header text="${text}">
        <wem-menu orientation="${orientation}" items="${items}" @menuClick="${menuClick}"></wem-menu>
    </wem-header>
`;
export const WithMenu = TemplateWithMenu.bind({});
WithMenu.args = {
    text: "Header",
    ...Horizontal.args
}