import { LitElement, html, css } from "lit";

/**
 *
 */
class WEMMenu extends LitElement {
    static styles = css``;
    
    static properties = {
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
            <!--<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.6/build/pure-min.css" integrity="sha384-Uu6IeWbM+gzNVXJcM9XV3SohHtmWE+3VGi496jvgX1jyvDTXfdK+rfZc8C1Aehk5" crossorigin="anonymous">-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            
            <aside class="menu">
                <ul class="menu-list">
                    ${this.items.map((i) => html`
                        <li><a href="${this.baseUrl+i}" @click="${this._dispatchClick}">${i}</a></li>
                    `)}
                </ul>
            </aside>
            
            <!--<div class="pure-menu pure-menu-${this.orientation}">
                <ul class="pure-menu-list">
                    ${this.items.map((i) => html`
                        <li class="pure-menu-item">
                            <a class="pure-menu-link" href="${this.baseUrl+i}" @click="${this._dispatchClick}">${i}</a>
                        </li>
                    `)}
                </ul>
            </div>-->
            <!--<nav class="${this.orientation}">
                ${this.items.map((i) => html`<a href="${this.baseUrl+i}" @click="${this._dispatchClick}">${i}</a>`)}
            </nav>-->
        `;
    }
}

export default WEMMenu;

customElements.define("wem-menu", WEMMenu);
