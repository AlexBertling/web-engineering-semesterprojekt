import WEMMenu from '../components/Menu';
import { html } from 'lit';

export default {
    title: 'WEM/Menu',
    argTypes: {
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

const Template = ({orientation, items, menuClick}) => html`
    <wem-menu orientation="${orientation}" items=${items} @menuClick="${menuClick}"></wem-menu>
`;

export const Horizontal = Template.bind({});
Horizontal.args = {
    orientation: "horizontal",
    items: ["Home", "News", "Contact", "About"]
}

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: "vertical",
    items: ["Home", "News", "Contact", "About"]
}