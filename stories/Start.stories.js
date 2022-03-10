import WEMStart from '../src/Start';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/Start',
    argTypes: {},
};

const Template = ({}) => html`
    <wem-start></wem-start>
`;

export const Default = Template.bind({});
Default.args = {}