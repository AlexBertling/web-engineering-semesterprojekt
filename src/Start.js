import { LitElement, html, css } from 'lit';

class WEMStart extends LitElement {

    static properties = {
        location: { type: Object },
    }

    render() {
        return html`
            <div>${this.location.params.subject}</div>
            <div>${this.location.params.entry}</div>
        `
    }

}

export default WEMStart;

customElements.define("wem-start", WEMStart);