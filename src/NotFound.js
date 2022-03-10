import { LitElement, html, css } from 'lit';

class WEMNotFound extends LitElement {

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <section class="hero is-info is-warning">
                <div class="hero-body">
                    <p class="title">
                        Seite nicht gefunden.
                    </p>
                    <p class="subtitle">
                        Eine Seite mit dieser URL existiert leider nicht.
                    </p>
                </div>
            </section>
        `
    }

}

export default WEMNotFound;

customElements.define("wem-not-found", WEMNotFound);