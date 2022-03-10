import Rednerliste from '../src/components/Rednerliste';
import { html } from 'lit';

export default {
  title: 'Components/Rednerliste',
  argTypes: {
    list: []
  },
};


const Template = ({list}) => html`
  <wem-rednerliste list="${list}"></wem-rednerliste>
`;


export const Empty = Template.bind({});
Empty.args = {
  list: []
}

export const Complete = Template.bind({});
Complete.args = {
  list: ["Redner A", "Redner B", "Redner C"]
}