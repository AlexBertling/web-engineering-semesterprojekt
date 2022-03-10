import WEMFooter from '../src/Footer';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/Footer',
    content: String
};

const Template = ({content}) => html`
    <wem-footer content="${content}"></wem-footer>
`;

export const Default = Template.bind({});
Default.args = {
    content: "Alexander Bertling © 2022"
}
