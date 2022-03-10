import Einkaufsliste from '../src/components/Einkaufsliste.js';
import { html } from 'lit';

export default {
  title: 'Components/Einkaufsliste',
  argTypes: {
    list: []
  },
};

const Template = ({list}) => html`
  <wem-einkaufsliste list="${list}"></wem-einkaufsliste>
`;


export const Empty = Template.bind({});
Empty.args = {
  list: []
}

export const Complete = Template.bind({});
Complete.args = {
  list: ["Apfel", "Banane", "Kekse"]
}