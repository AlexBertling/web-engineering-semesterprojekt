import WEMNavbar from '../src/Navbar';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/Navbar',
    argTypes: {
        baseUrl: String,
        items: [],
    },
};

const Template = ({baseUrl, items}) => html`
    <wem-navbar baseUrl="${baseUrl}" items=${items}></wem-navbar>
`;

export const Default = Template.bind({});
Default.args = {
    baseUrl: "/",
    items: ["Home", "News", "Contact", "About"],
}