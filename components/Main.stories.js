import WEMMain from './Main';
import { html } from 'lit';
import { Vertical } from './Menu.stories';

export default {
    title: 'WEM/Main',
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
    <wem-main styleMode="${styleMode}"></wem-main>
`;

export const Empty = TemplateEmpty.bind({});
Empty.args = {
    styleMode: "Grid"
}

const TemplateComplete = ({styleMode, orientation, items, menuClick, content, references}) => html`
    <wem-main styleMode="${styleMode}">
        <wem-menu slot="left" orientation="${orientation}" items="${items}" @menuClick="${menuClick}"></wem-menu>
        <div slot="center">${content}</div>
        <ul slot="right">${references.map(r => html`<li>${r}</li>`)}</ul>
    </wem-main>
`;
export const Complete = TemplateComplete.bind({});
Complete.args = {
    styleMode: "grid",
    content: "This is some example text.",
    references: ["http://www.test.de"],
    ...Vertical.args,
}