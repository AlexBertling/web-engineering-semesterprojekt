import WEMMenu from '../src/Menu';
import { html } from 'lit';

export default {
    title: 'WEM/Menu',
    argTypes: {
        preventRouting: {type: "boolean"},
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

const Template = ({preventRouting, orientation, items, menuClick}) => html`
    <wem-menu preventRouting="${preventRouting}" orientation="${orientation}" items=${items} @menuClick="${menuClick}"></wem-menu>
`;

export const Horizontal = Template.bind({});
Horizontal.args = {
    preventRouting: true,
    orientation: "horizontal",
    items: ["Home", "News", "Contact", "About"]
}

export const Vertical = Template.bind({});
Vertical.args = {
    preventRouting: true,
    orientation: "vertical",
    items: ["Home", "News", "Contact", "About"]
}