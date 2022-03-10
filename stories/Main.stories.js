import WEMMain from '../src/Main';
import { html } from 'lit';

export default {
    title: 'Solution Navigator/Main',
    argTypes: {
        hideLeft: Boolean
    },
};

const TemplateEmpty = () => html`
    <wem-main></wem-main>
`;

export const Empty = TemplateEmpty.bind({});

const TemplateComplete = ({hideLeft}) => html`
    <wem-main hideLeft="${hideLeft}">
        <div slot="left">left</div>
        <div slot="center">center</div>
    </wem-main>
`;
export const Complete = TemplateComplete.bind({});
Complete.args = {
    hideLeft: false
}