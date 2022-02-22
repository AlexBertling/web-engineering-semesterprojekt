import WEMFooter from '../src/Footer';
import { html } from 'lit';
import { Horizontal } from './Menu.stories';

export default {
    title: 'WEM/Footer',
};

const Template = ({items}) => html`
    <wem-footer></wem-header>
`;

export const Empty = Template.bind({});
