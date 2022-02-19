import { LitElement, html, css } from "lit";

/**
 *
 */
class WEMMenu extends LitElement {
    static styles = css``;
    
    static properties = {
        active: {type: String},
        baseUrl: {type: String},
        preventRouting: {type: Boolean},
        orientation: { type: String },
        items: {
            converter: {
                fromAttribute: (value, Array) => value ? value.split(",") : []
            }
        }
    };

    constructor() {
        super();
        this.items = [];
    }

    _dispatchClick(e) {
        if (this.preventRouting) e.preventDefault();
        this.dispatchEvent(new CustomEvent("menuClick", { detail: e.target.innerText, bubbles: true }));
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            
            <aside class="menu">
                <ul class="menu-list">
                    ${this.items.map((i) => html`
                        <li><a class="${this.active == i ? "is-active" : ""}" href="${this.baseUrl+i}" @click="${this._dispatchClick}">${i}</a></li>
                    `)}
                </ul>
            </aside>
        `;
    }
}

export default WEMMenu;

customElements.define("wem-menu", WEMMenu);
