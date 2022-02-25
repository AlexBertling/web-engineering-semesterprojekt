import { LitElement, html, css } from "lit";
import { router } from "./Router.js"

/**
 *
 */
class WEMMenu extends LitElement {
    static styles = css`
        aside.menu {
            position: sticky;
            top: 52px;
        }
    `;
    
    static properties = {
        baseUrl: {type: String},
        items: {
            converter: {
                fromAttribute: (value, Array) => value ? value.split(",") : []
            }
        },
    };

    constructor() {
        super();
        this.items = [];
    }

    render() {
        return html`
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
            <aside class="menu">
                <ul class="menu-list">
                    ${this.items.map((i) => {
                        const url = this.baseUrl.split("/").map(e => encodeURIComponent(e)).join("/") + router.urlForPath(encodeURIComponent(i));
                        return html`
                        <li><a class="${router.location.getUrl() == url ? "is-active" : ""}" href="${url}">${i}</a></li>
                    `})}
                </ul>
            </aside>
        `;
    }
}

export default WEMMenu;

customElements.define("wem-menu", WEMMenu);
