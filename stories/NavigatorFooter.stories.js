import WEMFooter from '../src/components/NavigatorFooter';
import { html } from 'lit';
import { Horizontal } from './NavigatorMenu.stories';

export default {
    title: 'Components/NavigatorFooter',
    argTypes: {
        items: []
    },
};

const Template = ({items}) => html`
    <wem-navigator-footer items="${items}"></wem-navigator-footer>
`;

export const Empty = Template.bind({});
Empty.args = {
    items: []
}

export const Complete = Template.bind({});
Complete.args = {
    items: ["Sitemap", "Home", "News", "Contact", "About"]
}