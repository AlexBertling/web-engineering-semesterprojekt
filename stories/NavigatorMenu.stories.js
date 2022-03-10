import WEMMenu from '../src/components/NavigatorMenu';
import { html } from 'lit';

export default {
    title: 'Components/NavigatorMenu',
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
    <wem-navigator-menu preventRouting="${preventRouting}" orientation="${orientation}" items=${items} @menuClick="${menuClick}"></wem-navigator-menu>
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