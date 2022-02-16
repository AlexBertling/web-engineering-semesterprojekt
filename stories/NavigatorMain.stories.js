import WEMMain from '../src/NavigatorMain';
import { html } from 'lit';
import { Vertical } from './NavigatorMenu.stories';

export default {
    title: 'WEM/NavigatorMain',
    argTypes: {
        styleMode: {
            options: ["grid", "flex"],
            control: {type: "radio"}
        },
        orientation: {
            options: ["horizontal", "vertical"],
            control: {type: "radio"}
        },
        items: [],
        menuClick: {
            action: "menuClick"
        },
        content: String,
        references: []
    },
};

const TemplateEmpty = ({styleMode}) => html`
    <wem-navigator-main styleMode="${styleMode}"></wem-navigator-main>
`;

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    styleMode: "Grid"
}

const TemplateComplete = ({styleMode, orientation, items, menuClick, content, references}) => html`
    <wem-navigator-main styleMode="${styleMode}">
        <wem-navigator-menu slot="left" orientation="${orientation}" items="${items}" @menuClick="${menuClick}"></wem-navigator-menu>
        <div slot="center">${content}</div>
        <ul slot="right">${references.map(r => html`<li>${r}</li>`)}</ul>
    </wem-navigator-main>
`;
export const Complete = TemplateComplete.bind({});
Complete.args = {
    styleMode: "grid",
    content: "This is some example text.",
    references: ["http://www.test.de"],
    ...Vertical.args,
}