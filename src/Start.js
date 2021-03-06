import { LitElement, html, css } from 'lit';

class WEMStart extends LitElement {

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <section class="hero is-info is-medium">
                <div class="hero-body">
                    <p class="title">
                        Web Engineering Semesterprojekt
                    </p>
                    <p class="subtitle">
                        Alexander Bertling im WS 2022
                    </p>
                </div>
            </section>
        `
    }

}

export default WEMStart;

customElements.define("wem-start", WEMStart);