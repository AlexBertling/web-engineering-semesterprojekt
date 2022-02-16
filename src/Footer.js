import { LitElement, html, css } from "lit";

/**
 *
 */
class WEMFooter extends LitElement {

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <footer class="footer pt-4 pb-4">
                <div class="content has-text-centered">
                    <p>
                        Alexander Bertling © 2022
                    </p>
                </div>
            </footer>
        `;
    }
}

export default WEMFooter;

customElements.define("wem-footer", WEMFooter);
