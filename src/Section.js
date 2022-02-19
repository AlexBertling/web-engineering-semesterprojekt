import { LitElement, html, css } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 *
 */
class WEMSection extends LitElement {
    static properties = {
        title: {type: String},
        subtitle: {type: String},
        paragraphs: {type: Array}
    }

    constructor() {
        super();
        this.paragraphs = [];
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <section class="section">
                <h1 class="title">${this.title}</h1>
                <h2 class="subtitle">
                    ${this.subtitle}&nbsp;
                </h2>
                
                <div class="content">
                    ${this.paragraphs.map(p => html`
                        <h3>${p.title}</h3>
                        <p>${unsafeHTML(p.content)}</p>
                    `)}
                    
                </div>
            </section>
        `;
    }
}

export default WEMSection;

customElements.define("wem-section", WEMSection);
