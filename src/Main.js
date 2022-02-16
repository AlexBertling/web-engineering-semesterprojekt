import { LitElement, html, css } from "lit";

/**
 *
 */
class WEMMain extends LitElement {
    static styles = css`
        main {
            height: 100%;
        }
    `;
    static properties = {
        styleMode: {type: String}
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <main class="columns">
                <aside class="column is-one-fifth">
                    <slot name="left"></slot>
                </aside>
                <section class="column">
                    <slot name="center"></slot>
                </section>
            </main>
        `;
    }
}

export default WEMMain;

customElements.define("wem-main", WEMMain);
