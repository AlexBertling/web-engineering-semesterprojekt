import WEMMenu from '../src/Menu';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/Menu',
    argTypes: {
        baseUrl: String,
        items: []
    },
};

const Template = ({baseUrl, items}) => html`
    <wem-menu baseUrl="${baseUrl}" items=${items}></wem-menu>
`;

export const Default = Template.bind({});
Default.args = {
    baseUrl: "/level1/",
    items: ["Home", "News", "Contact", "About"]
}