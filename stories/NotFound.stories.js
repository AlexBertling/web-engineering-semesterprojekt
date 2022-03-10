import WEMNotFound from '../src/NotFound';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/NotFound',
    argTypes: {},
};

const Template = ({}) => html`
    <wem-not-found></wem-not-found>
`;

export const Default = Template.bind({});
Default.args = {}