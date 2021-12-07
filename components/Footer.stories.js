import WEMFooter from './Footer';
import { html } from 'lit';
import { Horizontal } from './Menu.stories';

export default {
    title: 'WEM/Footer',
    argTypes: {
        items: []
    },
};

const Template = ({items}) => html`
    <wem-footer items="${items}"></wem-header>
`;

export const Empty = Template.bind({});
Empty.args = {
    items: []
}

export const Complete = Template.bind({});
Complete.args = {
    items: ["Sitemap", "Home", "News", "Contact", "About"]
}